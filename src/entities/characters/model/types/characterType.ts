export interface ICharacter {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: boolean;
  };
  results: [
    {
      id: number;
      name: string;
      status: 'Alive' | 'Dead' | 'unknown';
      species: string;
      type: string;
      gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
  ];
}

export interface ICharacterId {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type?: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface ICharacterFilter {
  isFiltered: boolean;
  status: string;
  gender: string;
}
