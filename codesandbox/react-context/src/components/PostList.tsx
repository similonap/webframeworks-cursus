import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';

const PostList = () => {
  const { posts } = useContext(DataContext);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList;
