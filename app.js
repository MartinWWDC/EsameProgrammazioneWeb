

const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();
const port = 3000;

// Configura le tue credenziali Spotify

const clientId = '18c87d61a29e44fda757c9ba567502ae';
const clientSecret = 'b849e0d2d1294a13890330b38ac7c8fc';


// Ottieni un token di accesso da Spotify
let accessToken = null;

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  accessToken = data.access_token;
}

// Middleware per gestire il token di accesso
app.use(async (req, res, next) => {
  if (!accessToken) {
    await getAccessToken();
  }
  next();
});
app.use(express.static('public'));



// Route per ottenere le canzoni più ascoltate su Spotify
app.get('/song/:songId', async (req, res) => {
    const { songId } = req.params;
  
    try {
      const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Errore nella richiesta a Spotify API:', error);
      res.status(500).json({ error: 'Errore nella richiesta a Spotify API' });
    }
  });

app.get('/search', async (req, res) => {
    const { q } = req.query;
  
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      const data = await response.json();
      res.json(data.tracks.items);
    } catch (error) {
      console.error('Errore nella ricerca di canzoni su Spotify:', error);
      res.status(500).json({ error: 'Errore nella ricerca di canzoni su Spotify' });
    }
  });


  app.get('/getPlaylist', async (req, res) => {
    //TODO implement db
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/');
  });

  app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
