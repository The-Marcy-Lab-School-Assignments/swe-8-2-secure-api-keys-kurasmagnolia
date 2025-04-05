/** @format */

import { getTrendingGifs, getGifsBySearch } from '../adapters/giphyAdapters';
import { useEffect, useState } from 'react';

function GifContainer({ searchTerm }) {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await getTrendingGifs();
      if (error) {
        return setError(error);
      }
      setGifs(data.data);
    };
    doFetch();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const doFetch = async () => {
      const [data, error] = await getGifsBySearch(searchTerm);
      if (error) {
        return setError(error);
      }
      setGifs(data.data);
    };
    doFetch();
  }, [searchTerm]);

  if (!gifs) {
    return (
      <div>
        <h3>Sorry, we couldn't fetch the gifs at this time.</h3>
      </div>
    );
  }

  return (
    <ul>
      {gifs.map((gif) => {
        return (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt="" />
          </li>
        );
      })}
    </ul>
  );
}

export default GifContainer;
