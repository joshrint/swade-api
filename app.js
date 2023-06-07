const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

const characters = require('./routes/api/character');

//Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/characters', characters);

const port = process.env.PORT || 8082;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));