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

  async handleChat(message: string): Promise<string> {
    const checkMessage = await this.groqGemmaProvider.getMessageType(message);

    if (checkMessage === MessageType.RECOMMENDATION) {
      console.time('getRecomendations');
      const trendingAndMostLikedFilmes =
        await this.theMovieDbProvider.getRecomendations();
      console.timeEnd('getRecomendations');

      return await this.groqMixtralProvider.getRecommendations(
        JSON.stringify(trendingAndMostLikedFilmes),
        message,
      );
    }

    const filmTitle = await this.groqGemmaProvider.getTitleFromMessage(message);
    const searchedFilme = await this.theMovieDbProvider.getFilmByName(
      filmTitle,
    );

    return await this.groqGemmaProvider.message(
      JSON.stringify(searchedFilme),
      message,
    );
  }
}
