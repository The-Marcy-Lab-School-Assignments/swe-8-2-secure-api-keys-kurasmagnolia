/** @format */

import { handleFetch } from './handleFetch.js';

const API_KEY = 'How can I include this without exposing it to the public?';

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  return await handleFetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`
  );
};

export const getGifsBySearch = async (searchTerm) => {};
