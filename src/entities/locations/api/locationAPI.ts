//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//types
import { ILocation, ILocationId } from '../model/types/locationType';

const locationAPI = jsonPlaceholderAPI.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<ILocation, number>({
      query: (page) => ({
        url: `/location/?page=${page}`,
        method: 'GET'
      }),
      providesTags: ['Location']
    }),
    getLocationId: build.query<ILocationId, number>({
      query: (id) => ({
        url: `/location/${id}`,
        method: 'GET'
      }),
      providesTags: ['Location']
    }),
    getLocationMultiple: build.query<ILocationId, number[]>({
      query: (id) => ({
        url: `/location/${[id]}`,
        method: 'GET'
      }),
      providesTags: ['Location']
    })
  })
});

export const {
  useGetLocationsQuery,
  useGetLocationIdQuery,
  useGetLocationMultipleQuery
} = locationAPI;
