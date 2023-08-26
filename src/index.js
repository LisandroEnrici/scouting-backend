import express from 'express';

const PORT = 8000;
const app = express();

// Settings
app.set('port', process.env.PORT || 8000)

// Init sever
app.listen(PORT);
console.log('Server running on port: ', PORT)

// Routes
app.get('/scouts', (req, res) => { res.send('Without scouts yet') })