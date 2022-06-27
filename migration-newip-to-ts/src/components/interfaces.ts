import { SourcesData, NewsData } from './types';

export interface DOMDraw {
  draw(data: [] | SourcesData['sources'] | NewsData['articles']): void;
}
