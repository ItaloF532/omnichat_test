import { GroqBaseAPI } from '../GroqBaseApi';
import { messageIsSafeToUsePromp } from '../prompts/MessageIsSafeToUsePromp';
import { recommendationFilmPrompt } from '../prompts/RecommendationFilmPrompt';

export class GroqOllamaVersatileProvider extends GroqBaseAPI {
  constructor() {
    super('llama-3.3-70b-versatile');
  }

  public async getRecommendations(
    enhancedFilmsInformations: string,
    message: string,
  ): Promise<string> {
    return await this.sendMessage(
      recommendationFilmPrompt(enhancedFilmsInformations, message),
    );
  }

  public async isSafeMessage(message: string): Promise<boolean> {
    const res = await this.sendMessage(messageIsSafeToUsePromp(message));
    console.log('res', res);
    return res === 'true';
  }
}
