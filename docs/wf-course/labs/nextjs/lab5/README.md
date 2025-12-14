# Labo 5

## 1. Herhalingsoefening: Spotifi

> 📂 **Naam project:** `lab-nextjs-spotifi`
> 🔗 **Basis project:** 

We gaan een eigen versie van een muziekstreamingdienst bouwen, genaamd Spotifi. We gaan hiervoor de volgende REST API gebruiken: [Music REST API](https://sampleapis.assimilate.be/music/songs).

Om hier sneller mee aan de slag te kunnen, kan je best beginnen van de [static-html](./static-html.zip) zip file. Dit is een statische HTML versie van de Spotifi app.

Je kan een volledig werkende versie van het project uitproberen op [https://spotifi-next-js.vercel.app/](https://spotifi-next-js.vercel.app/).

Je kan ook vertrekken van de volgende database bestanden:

```ts
// file: database/auth.ts
import { Collection, MongoClient } from "mongodb";
import { User } from "@/types"

const client = new MongoClient(process.env.MONGODB_URI!);

export const userCollection: Collection<User> = client.db("spotifi").collection<User>("users");

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await userCollection.findOne<User>({ email });
}

export const findUserById = async (id: number): Promise<User | null> => {
    return await userCollection.findOne<User>({id});
}

export const createUser = async (user: Omit<User, "id">): Promise<void> => {
    const lastUser = await userCollection.find().sort({ id: -1 }).limit(1).toArray();
    const newId = lastUser.length > 0 ? lastUser[0].id + 1 : 1;
    const userWithId: User = { id: newId, ...user };
    await userCollection.insertOne(userWithId);
}

export const updateUser = async (id: number, updates: Partial<User>): Promise<void> => {
    await userCollection.updateOne({ id }, { $set: updates });
}
```

en 

```ts
// file: database/songs.ts
import { Collection, MongoClient, SortDirection } from "mongodb";
import { Song, SortField, User } from "@/types"

export const PAGE_SIZE = 10;

const client = new MongoClient(process.env.MONGODB_URI!);

export const songsCollection: Collection<Song> = client.db("spotifi").collection<Song>("songs");
export const usersCollection: Collection<User> = client.db("spotifi").collection<User>("users");

export const seedSongs = async () => {

    const response = await fetch("https://sampleapis.assimilate.be/music/songs");
    const data: Song[] = await response.json();

    let songs: Song[] = data;
    await songsCollection.deleteMany({});
    if (await songsCollection.countDocuments() === 0) {
        songsCollection.insertMany(songs);
        console.log("Seeded songs collection");
    }
    console.log("Songs collection seeded!");
}

export const getSongs = async (
  userId: number | null, 
  q: string, 
  sortField: SortField, 
  sortDirection: SortDirection, 
  page: number = 1
) => { 
    const pipeline: any[] = [];

    if (q) {
        const regex = new RegExp(q, 'i');
        pipeline.push({
            $match: {
                $or: [
                    { title: { $regex: regex } },
                    { description: { $regex: regex } },
                ],
            },
        });
    }

    if (userId != null) {
        pipeline.push(
            {
                $lookup: {
                    from: 'users',
                    let: { songId: '$id' },
                    pipeline: [
                        { $match: { $expr: { $eq: ['$id', userId] } } },
                        { $project: { _id: 0, library: 1 } },
                    ],
                    as: 'user_ctx',
                },
            },
            { $addFields: { owned: { $in: ['$id', { $ifNull: [{ $arrayElemAt: ['$user_ctx.library', 0] }, []] }] } } },
            { $project: { user_ctx: 0 } }
        );
    }

    if (sortField === 'publish_date') {
        pipeline.push({ $sort: { 'more_information.publish_date': sortDirection === 'asc' ? -1 : 1 } });
    } else if (sortField === 'title') {
        pipeline.push({ $sort: { title: sortDirection === 'asc' ? 1 : -1 } });
    } else if (sortField === 'owned' && userId != null) {
        pipeline.push({ $sort: { owned: sortDirection === 'asc' ? -1 : 1 } });
    }

    pipeline.push({
        $facet: {
            data: [
                { $skip: (page - 1) * PAGE_SIZE },
                { $limit: PAGE_SIZE }
            ],
            totalCount: [
                { $count: 'count' }
            ]
        }
    });

    const [result] = await songsCollection.aggregate(pipeline).toArray();

    const songs = result.data;
    const total = result.totalCount[0] ? result.totalCount[0].count : 0;

    return {
        songs: makeLean<Song[]>(songs),
        pages: Math.ceil(total / PAGE_SIZE)
    };
}

export const getSongById = async (songId: number, userId: number | null = null): Promise<Song | null> => {
    const pipeline: any[] = [
        { $match: { id: songId } }
    ];

    if (userId != null) {
        pipeline.push(
            {
                $lookup: {
                    from: 'users',
                    let: { songId: '$id' },
                    pipeline: [
                        { $match: { $expr: { $eq: ['$id', userId] } } },
                        { $project: { _id: 0, library: 1 } },
                    ],
                    as: 'user_ctx',
                },
            },
            { $addFields: { owned: { $in: ['$id', { $ifNull: [{ $arrayElemAt: ['$user_ctx.library', 0] }, []] }] } } },
            { $project: { user_ctx: 0 } }
        );
    }

    const [song] = await songsCollection.aggregate<Song>(pipeline).toArray();
    return song ? makeLean<Song>(song) : null;
}

const makeLean = <T,>(obj: any): T => {
    return JSON.parse(JSON.stringify(obj)) as T;
}

export const addCoinsToUser = async (userId: number, coins: number): Promise<void> => {
    await usersCollection.updateOne({ id: userId }, { $inc: { credits: coins } });
}
```

en de volgende interfaces:

```ts
// file: types.ts
export interface User {
    id: number;
    email: string;
    name: string;
    credits: number;
    avatar: string;
    passwordHash: string;
    library: number[];
}


export interface Song {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    credits: number;
    mp3: string;
    owned?: boolean;
    more_information: {
        publish_date: string;
        genre: string;
        type: string;
        youtube?: string;
    };
}


export type SortField = "title" | "owned" | "publish_date";
export type SortDirection = "asc" | "desc";
```

