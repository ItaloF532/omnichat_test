import {
  MovieModel,
  MovieRecomendationsModelModel,
  TheMoviePaginatedModel,
} from '../models/MovieRecomendationsModel';
import { TheMovieBaseApi } from '../TheMovieBaseApi';

export class TheMovieDbProvider extends TheMovieBaseApi {
  async getRecomendations(): Promise<MovieRecomendationsModelModel> {
    const response = await Promise.all([
      await this.request<TheMoviePaginatedModel>('/movie/popular', {
        page: 1,
        language: 'pt-BR',
      }),
      await this.request<TheMoviePaginatedModel>('/movie/top_rated', {
        page: 1,
        language: 'pt-BR',
      }),
    ]);

    return {
      tredingFilms: response[0].data.results.slice(0, 5),
      topRatedFilms: response[1].data.results.slice(0, 5),
    };
  }

  async getFilmByName(title: string): Promise<MovieModel[]> {
    const search = await this.request<TheMoviePaginatedModel>('/search/movie', {
      page: 1,
      query: title,
    });

    return search.data.results;
  }
}
