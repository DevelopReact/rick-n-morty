//api
import { IEpisode } from '@/entities/episodes/model/types/episodeTypes';
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';

export interface StateSchema {
  [jsonPlaceholderAPI.reducerPath]: ReturnType<
    typeof jsonPlaceholderAPI.reducer
  >;
  episode: IEpisode;
}
