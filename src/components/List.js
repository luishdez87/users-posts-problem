import React from  'react';
import { useApi } from '../hooks/useApi';
import './List.css';

const List = () => {

  const { posts, users } = useApi();

  const mappedData = () => {
    return posts.map(post => {
      const user = users.find(u => u.id === post.userId);
      return user ? { user, ...post } : post 
    });
  }
  
  return (
    <>
      <div>list</div>
      {mappedData().length ? mappedData().map(item => (
        <div className="flex grid" key={item.id}>
          <p>
            {item.id}
          </p>
          <p>
            {item.user?.name}
          </p>
          <p>
            {item.title}
          </p>
          <p>
            {item.body}
          </p>
        </div>
      )) : <p>Loading...</p> }
    </>
  );
}

export default List;
