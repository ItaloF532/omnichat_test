import { GroqBaseAPI } from '../GroqBaseApi';
import { recommendationFilmPrompt } from '../prompts/RecommendationFilmPrompt';

export class GroqMixtralProvider extends GroqBaseAPI {
  constructor() {
    super('mixtral-8x7b-32768');
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
