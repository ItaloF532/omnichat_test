import axios from 'axios';
import { ENVIRONMENT } from '../../../constants/environment';
import {
  MovieModel,
  TheMoviePaginatedModel,
} from './models/MovieRecomendationsModel';

export class TheMovieBaseApi {
  private api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });

  async request<T>(path: string, params: Object) {
    return await this.api.get<T>(path, {
      params: {
        api_key: ENVIRONMENT.THEMOVIEDB_API_KEY,
        ...params,
      },
    });
  }
}
