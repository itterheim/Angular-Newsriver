import { IElement } from './IElement';
import { IWebsite } from './IWebsite';
import { IMetadata } from './IMetadata';

export interface IArticle {
  id: string;
  publishDate: string;
  discoverDate: string;
  title: string;
  language: string;
  text: string;
  structuredText: string;
  url: string;
  elements: IElement[];
  website: IWebsite;
  metadata: IMetadata;
  highlight: string;
  score: number;
}
