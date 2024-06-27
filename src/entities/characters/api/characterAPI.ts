import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { ICharacter, ICharacterId } from '../model/types/characterType';

const characterAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query<ICharacter, number>({
      query: (page) => ({
        url: `/character/?page=${page}`,
        method: 'GET'
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.results.map(({ id }) => ({
                type: 'Character' as const,
                id
              })),
              'Character'
            ]
          : ['Character']
    }),
    getCharacterId: build.query<ICharacterId, number>({
      query: (id) => ({
        url: `/character/${id}`,
        method: 'GET'
      }),
      providesTags: (result, error, id) => {
        return [{ type: 'Character', id }];
      }
    }),
    getCharacterMulti: build.query<ICharacterId, number[]>({
      query: (id) => ({
        url: `/character/${[id]}`,
        method: 'GET'
      }),
      providesTags: ['Character']
    })
  })
});

export const {
  useGetCharactersQuery,
  useGetCharacterIdQuery,
  useGetCharacterMultiQuery
} = characterAPI;
