/** @format */

//////////////////////////
// Imports
//////////////////////////
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//////////////////////////
// Constants
//////////////////////////
const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const baseUrl = 'https://api.giphy.com/v1/gifs';

const serveTrendingGifs = async (req, res) => {
  const url = `${baseUrl}/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`;

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

const serveSearchedGifs = async (req, res) => {
  let { search } = req.query;

  const url = `${baseUrl}/search?limit=3&rating=g&api_key=${process.env.API_KEY}&q=${search}`;

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

app.get('/api/gifs', (req, res, next) => {
  if (req.query.search) {
    return serveSearchedGifs(req, res, next);
  } else {
    return serveTrendingGifs(req, res, next);
  }
});

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
