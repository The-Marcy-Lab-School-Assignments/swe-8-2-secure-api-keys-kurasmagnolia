/** @format */

//////////////////////////
// Imports
//////////////////////////
const path = require('path');
const express = require('express');

//////////////////////////
// Constants
//////////////////////////
const API_KEY = 'kcs1s7c89aF0UOKZ3ojJtVobnKiFBKni';
const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const serveTrendingGifs = async (req, res, next) => {
  const url = `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${API_KEY}`;

  try {
    // This is pretty standard fetching logic
    const gifsResponse = await fetch(url);
    const gifsData = await gifsResponse.json();
    // send the fetched data to the client
    res.send(gifsData);
  } catch (error) {
    // or send an error. 503 means the service is unavailable
    res.status(503).send(error);
  }
};

//////////////////////////
// Endpoints
//////////////////////////

app.get('/api/gifs', serveTrendingGifs);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
