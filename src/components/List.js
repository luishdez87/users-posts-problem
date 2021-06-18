import React from  'react';
import { useApi } from '../hooks/useApi';
import './List.css';

const List = () => {

  const { posts, users } = useApi();

  console.log(posts, users);
  return (
    <>
      <div>list</div>
      {posts.map(post => (
        <div className="flex grid" key={post.id}>
          <p> {post.id} </p>
          {users.map(user => (
            <p key={user.id}>
              {user.id === post.userId && <p> {user.name} </p>} 
            </p>
          ))}
          <p> {post.title} </p>
          <p> {post.body} </p>
        </div>
      ))}
    </>
  );
}

export default List;
