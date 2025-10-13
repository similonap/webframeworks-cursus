import React, { useEffect, useState } from 'react';

export interface Post {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface DataContext {
    posts: Post[];
    loading: boolean;
    reload: () => void;
    createPost: (post: Post) => void;
}

export const DataContext = React.createContext<DataContext>({ posts: [], loading: false, reload: () => { }, createPost: () => { } });

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<number>(0);

    const createPost = async (post: Post) => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = await response.json();
        setPosts([...posts, json]);
        setLoading(false);
    }

    useEffect(() => {
        let cancelled = false;
        const loadData = async () => {
            setLoading(true);
            setPosts([]);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();
            setPosts(json);
            if (cancelled) return;
            setLoading(false);
        }
        loadData();
        return () => { cancelled = true; }
    }, [trigger]);

    const reload = () => {
        setTrigger(trigger + 1);
    }

    return (
        <DataContext.Provider value={{ posts: posts, reload: reload, loading: loading, createPost: createPost }}>
            {children}
        </DataContext.Provider>
    )
}