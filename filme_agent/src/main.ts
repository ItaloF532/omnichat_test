import { Request, Response } from 'express';
import { ENVIRONMENT } from './constants/environment';
import { ChatController } from './main/controllers/ChatController';

const express = require('express');
const cors = require('cors');

const app = express();
const port = ENVIRONMENT.PORT || 8080;

app.use(cors());

app.get('/chat', async (req: Request, res: Response) => {
  const { message } = req.query as { message: string };
  const teste = await new ChatController().handleChat(message);

  res.send(teste);
});

app.listen(port, async () => {
  console.log(`Running on: ${port}`);
});
