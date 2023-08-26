import express from 'express';
import scoutsRoutes from './routes/scouts.routes.js'

const PORT = 8000;
const app = express();

// Settings
app.set('port', process.env.PORT || 8000)

// Routes
app.use(scoutsRoutes)

// Init sever
app.listen(PORT);
console.log('Server running on port: ', PORT)
