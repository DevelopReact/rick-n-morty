export interface IEpisode {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: [
    {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }
  ];
}

export interface IMultiEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
