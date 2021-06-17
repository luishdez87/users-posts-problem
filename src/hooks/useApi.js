import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApi = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    async function fetchApis() {
      const userResponse = await axios.get(usersUrl);
      const postResponse = await axios.get(postsUrl);
      setUsers(userResponse.data);
      setPosts(postResponse.data);
    }
    fetchApis();
  }, []);


  return { users, posts }
};
