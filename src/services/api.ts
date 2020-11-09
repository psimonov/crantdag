import axios from 'axios';

const getMenu = async () => {
  const { data } = await axios.get('/menu.json');

  return data;
};

const getPosts = async () => {
  const { data } = await axios.get('/api/posts');

  return data;
};

export { getMenu, getPosts };
