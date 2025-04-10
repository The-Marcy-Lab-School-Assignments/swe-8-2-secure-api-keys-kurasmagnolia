/** @format */

import { handleFetch } from './handleFetch.js';

// const API_KEY = 'How can I include this without exposing it to the public?';

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  const url = `/api/gifs`;
  const [data, error] = await handleFetch(url);

  return [data, error];
};
export const getGifsBySearch = async (searchTerm) => {
  const url = `/api/gifs?search=${searchTerm}`;
  const [data, error] = await handleFetch(url);

  return [data, error];
};
