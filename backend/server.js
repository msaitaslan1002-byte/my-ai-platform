const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Ana endpoint
app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

// AI test endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Merhaba! AI backend hazır.' });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
