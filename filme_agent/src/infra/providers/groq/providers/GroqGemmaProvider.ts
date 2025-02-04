import { GroqBaseAPI } from '../GroqBaseApi';
import { checkMessageTypePrompt } from '../prompts/CheckMessageTypePrompt';
import { extractTitleFromMessagePrompt } from '../prompts/ExtractTitleFromMessagePrompt';
import { specificFilmPrompt } from '../prompts/SpecificFilmPrompt';

export enum MessageType {
  FILM = 'FILM',
  GENRE = 'GENRE',
  RECOMMENDATION = 'RECOMMENDATION',
}

export class GroqGemmaProvider extends GroqBaseAPI {
  public async message(
    enhancedFilmInformations: string,
    message: string,
  ): Promise<string> {
    return await this.sendMessage(
      specificFilmPrompt(enhancedFilmInformations, message),
    );
  }

  public async getTitleFromMessage(message: string): Promise<string> {
    return await this.sendMessage(extractTitleFromMessagePrompt(message));
  }

  public async getMessageType(message: string): Promise<MessageType> {
    const msgType = await this.sendMessage(checkMessageTypePrompt(message));

    switch (msgType.trim().toLowerCase()) {
      case 'recomendacao':
        return MessageType.RECOMMENDATION;
      case 'filme':
      default:
        return MessageType.FILM;
    }
  }
}
