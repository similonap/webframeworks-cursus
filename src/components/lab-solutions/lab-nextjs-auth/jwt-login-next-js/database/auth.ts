import { Collection, MongoClient } from "mongodb";
import { User } from "@/types";
import bcrypt from "bcrypt";

const client = new MongoClient(process.env.MONGODB_URI!);

export const userCollection: Collection<User> = client.db("auth-jwt").collection<User>("users");

const DUMMY_USERS: User[] = [
    {
        id: 1,
        email: "jon.doe@acme.com",
        name: "Jon Doe",
        avatar: "jon-doe.jpg",
        passwordHash: bcrypt.hashSync("password123", 10)
    },
    {
        id: 2,
        email: "alice.doe@acme.com",
        name: "Alice Doe",
        avatar: "alice-doe.jpg",
        passwordHash: bcrypt.hashSync("mypassword", 10)
    }
]

export const seedDummyUsers = async () => {
    const existingUsers = await userCollection.find({}).toArray();
    if (existingUsers.length === 0) {
        await userCollection.insertMany(DUMMY_USERS);
        console.log("Dummy users seeded to the database.");
    } else {
        console.log("Database already has users. Skipping seeding.");
    }
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await userCollection.findOne({ email });
}

export const findUserById = async (id: number): Promise<User | null> => {
    return await userCollection.findOne({ id });
}

export const createUser = async (user: Omit<User, "id">): Promise<void> => {
    const lastUser = await userCollection.find().sort({ id: -1 }).limit(1).toArray();
    const newId = lastUser.length > 0 ? lastUser[0].id + 1 : 1;
    const userWithId: User = { id: newId, ...user };
    await userCollection.insertOne(userWithId);
}