//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { ICharacterFilter } from '@/entities/characters/model/types/characterType';
import { IEpisode } from '@/entities/episodes/model/types/episodeTypes';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  episode: IEpisode;
  character: ICharacterFilter;
}
