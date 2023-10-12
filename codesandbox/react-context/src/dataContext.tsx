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
    loadData: () => void;
    createPost: (post: Post) => void;
}

export const DataContext = React.createContext<DataContext>({ posts: [], loading: false, loadData: () => { }, createPost: () => { } });

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

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

    const loadData = async () => {
        setLoading(true);
        setPosts([]);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        setPosts(json);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <DataContext.Provider value={{ posts: posts, loadData: loadData, loading: loading, createPost: createPost }}>
            {children}
        </DataContext.Provider>
    )
}