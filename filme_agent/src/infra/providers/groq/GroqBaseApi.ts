import { ENVIRONMENT } from '../../../constants/environment';
import { ChatGroq } from '@langchain/groq';
import { AIMessageChunk, HumanMessage } from '@langchain/core/messages';

export abstract class GroqBaseAPI {
  private groq: ChatGroq;

  constructor(model: string = 'gemma2-9b-it') {
    this.groq = new ChatGroq({
      apiKey: ENVIRONMENT.GROQ_API_KEY,
      model: model ?? 'gemma2-9b-it',
    });
  }

  protected async sendMessage(messagen: string): Promise<string> {
    const res = await this.groq.invoke([new HumanMessage(messagen)], {});
    return res.content as string;
  }
}
