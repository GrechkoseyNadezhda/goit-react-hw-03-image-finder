import axios from 'axios';

const API_KEY = '31491346-b15049fc2f6fbb9cd88f031e0';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const getGalleryImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);

  return data;
};
