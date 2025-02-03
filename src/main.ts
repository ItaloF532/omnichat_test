import { ENVIRONMENT } from './constants/environment';

const express = require('express');
const cors = require('cors');

const app = express();
const port = ENVIRONMENT.PORT || 3000;

app.use(cors());

app.get('/chat', (req, res) => {
  res.send('Olá Mundo!');
});

app.listen(port, () => {
  console.log(`Running on: ${port}`);
});
