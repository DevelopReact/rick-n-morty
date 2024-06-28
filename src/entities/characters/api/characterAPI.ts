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
      providesTags: [{ type: 'Character', id: 'LIST' }]
    }),
    getCharacterId: build.query<ICharacterId, number>({
      query: (id) => ({
        url: `/character/${id}`,
        method: 'GET'
      }),
      providesTags: (_, __, id) => [{ type: 'Character', id: id }]
    }),
    getCharacterMulti: build.query<ICharacterId, number[]>({
      query: (id) => ({
        url: `/character/${[id]}`,
        method: 'GET'
      }),
      providesTags: [{ type: 'Character', id: 'LIST_ID' }]
    })
  })
});

export const {
  useGetCharactersQuery,
  useGetCharacterIdQuery,
  useGetCharacterMultiQuery
} = characterAPI;
