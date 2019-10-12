export interface IMetadata {
  finSentiment: {
    type: string;
    sentiment: number;
  };
  readTime: {
    type: string;
    seconds: number;
  };
  category: {
    type: string;
    country: string;
    region: string;
    category: string;
    countryCode: string;
  };
}
