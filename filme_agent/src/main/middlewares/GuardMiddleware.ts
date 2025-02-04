import { GroqOllamaVersatileProvider } from '../../infra/providers/groq/providers/GroqOllamaVersatileProvider';
import { Request, Response, NextFunction } from 'express';

// export class GuardMiddleware {
//   protected static groqOllamaVersatileProvider =
//     new GroqOllamaVersatileProvider();

//   static checkMessage(req: Request, res: Response, next: NextFunction) {
//     const groqOllamaVersatileProvider = new GroqOllamaVersatileProvider();
//     const { message } = req.query as { message: string };
//     const checkMessage =
//       this.groqOllamaVersatileProvider.isSafeMessage(message);

//     if (!checkMessage) {
//       return res
//         .status(406)
//         .json({ message: 'Desculpe, não posso lhe ajudar com isso.' });
//     }

//     next();
//   }
// }

export const checkIfMessageIsSafe = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { message } = req.query as { message: string };

  const groqOllamaVersatileProvider = new GroqOllamaVersatileProvider();
  const checkMessage = await groqOllamaVersatileProvider.isSafeMessage(message);
  console.log('checkMessage', checkMessage);
  if (!checkMessage) {
    res
      .status(406)
      .json({ message: 'Desculpe, não posso lhe ajudar com isso.' });

    return;
  }

  next();
};
