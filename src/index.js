const express = require('express');
const app = express();
const port = 3000;

// Settings
app.set('port', process.env.PORT || 5000)

// Middleware JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Message from backend!');
});

// Init server
app.listen(app.get('port'), () => {
  console.log(`Server on http://localhost:${app.get('port')}`);
});
