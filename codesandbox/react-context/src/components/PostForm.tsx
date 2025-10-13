import React from 'react';
import { useContext, useState } from 'react';
import { DataContext, Post } from '../providers/DataProvider';

const PostForm = () => {
    const { createPost } = useContext(DataContext);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const post: Post = {
            userId: 1,
            title: title,
            body: body
        }
        createPost(post);
        setTitle("");
        setBody("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" />
            <input type="submit" value="Create" />
        </form>
    )
}

export default PostForm;
