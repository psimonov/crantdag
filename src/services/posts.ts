import { instance } from './api';

const getMenu = async () => {
  const { data } = await instance.get('/menu.json');

  return data;
};

const getPosts = async () => {
  const { data } = await instance.get('/api/posts');

  return data;
};

export { getMenu, getPosts };
