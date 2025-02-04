import { GroqBaseAPI } from '../GroqBaseApi';
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
}
