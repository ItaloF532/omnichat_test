import cors from 'cors';
import express from 'express';
import { Request, Response } from 'express';
import { ENVIRONMENT } from './constants/environment';
import { ChatController } from './main/controllers/ChatController';

const app = express();
const port = ENVIRONMENT.PORT || 8080;

app.use(cors());

app.get('/chat', async (req: Request, res: Response) => {
  const { message } = req.query as { message: string };
  const response = await new ChatController().handleChat(message);

  res.send({ response });
});

app.listen(port, async () => {
  console.log(`Running on: ${port}`);
});
