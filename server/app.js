import express from 'express';
import cors from 'cors';

// Data
import { cities } from './data/cities.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/cities', (req, res) => {
  res.json(cities);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server is listening at', PORT);
});
