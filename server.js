const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Serve static files from the current directory
app.use(express.static('.'));

// Proxy endpoint for the join request
app.post('/api/join', async (req, res) => {
  try {
    const { id, name } = req.body;
    
    // Forward the request to the original API
    const response = await fetch('https://blooketbot.glitch.me/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name }),
    });
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying request:', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
});

// Proxy endpoint for the onlinecount WebSocket
app.get('/api/onlinecount', (req, res) => {
  res.json({ message: 'WebSocket proxy would be implemented here' });
});

// Proxy endpoint for the chat WebSocket
app.get('/api/chat', (req, res) => {
  res.json({ message: 'Chat WebSocket proxy would be implemented here' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});