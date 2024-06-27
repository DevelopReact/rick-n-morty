//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { IEpisode, IMultiEpisodes } from '../model/types/episodeTypes';

const episodeAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getEpisodes: build.query<IEpisode, number>({
      query: (page) => ({
        url: `/episode/?page=${page}`,
        method: 'GET'
      }),
      providesTags: ['Episode']
    }),
    getEpisodeById: build.query<IMultiEpisodes, number>({
      query: (id) => ({
        url: `/episode/${id}`,
        method: 'GET'
      }),
      providesTags: ['Episode']
    }),
    getEpisodeMultiple: build.query<IMultiEpisodes, number[]>({
      query: (id) => ({
        url: `/episode/${[id]}`,
        method: 'GET'
      }),
      providesTags: ['Episode']
    })
  })
});

export const {
  useGetEpisodesQuery,
  useGetEpisodeByIdQuery,
  useGetEpisodeMultipleQuery
} = episodeAPI;
