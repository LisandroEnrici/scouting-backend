import express from 'express';
import scoutsRoutes from './routes/scouts.routes.js'
import allowCrossDomain from './middlewares/AllowCrossDomain.js'

const PORT = process.env.PORT || 8001;
const app = express();

// Settings
app.set('port', PORT)

// Middlewares
//CORS middleware
app.use(allowCrossDomain)

// Routes
app.use(scoutsRoutes)

// Init sever
app.listen(PORT);
console.log('Server running on port: ', PORT)
