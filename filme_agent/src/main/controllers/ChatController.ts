import {
  MessageType,
  GroqGemmaProvider,
} from '../../infra/providers/groq/providers/GroqGemmaProvider';
import { GroqMixtralProvider } from '../../infra/providers/groq/providers/GroqMixtralProvider';
import { TheMovieDbProvider } from '../../infra/providers/theMovie/providers/TheMovideDbProvider';

export class ChatController {
  protected theMovieDbProvider = new TheMovieDbProvider();
  protected groqGemmaProvider = new GroqGemmaProvider();
  protected groqMixtralProvider = new GroqMixtralProvider();

  private async getFilmFromMessage(message: string) {
    const filmTitle = await this.groqGemmaProvider.getTitleFromMessage(message);
    if (
      filmTitle.toLowerCase() != 'nenhum' &&
      filmTitle.toLowerCase() != 'nenhuma'
    ) {
      const searchedFilme = await this.theMovieDbProvider.getFilmByName(
        filmTitle,
      );

      return JSON.stringify(searchedFilme);
    }

    return;
  }

  async handleChat(message: string): Promise<string> {
    const checkMessage = await this.groqGemmaProvider.getMessageType(message);
    console.log('checkMessage', checkMessage);
    if (checkMessage === MessageType.RECOMMENDATION) {
      const res = Promise.all([
        await this.theMovieDbProvider.getRecomendations(),
        await this.getFilmFromMessage(message),
      ]);

      return await this.groqMixtralProvider.getRecommendations(
        `${res[1]} \n ${JSON.stringify(res[0])}`,
        message,
      );
    }

    const enhancedContext = await this.getFilmFromMessage(message);
    return await this.groqGemmaProvider.message(enhancedContext, message);
  }
}
