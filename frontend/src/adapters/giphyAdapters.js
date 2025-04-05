import { handleFetch } from './handleFetch.js'

const API_KEY = 'kcs1s7c89aF0UOKZ3ojJtVobnKiFBKni'

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  return await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`)
}

export const getGifsBySearch = async (searchTerm) => {

}