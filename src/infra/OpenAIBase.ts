import axios, { AxiosInstance } from 'axios';
import { ENVIRONMENT } from '../constants/environment';

export abstract class OpenAIBaseAPI {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: ENVIRONMENT.OPENAI_API_URL,
      headers: {
        Authorization: `Bearer ${ENVIRONMENT.OPENAI_KEY}`,
      },
    });
  }
}
