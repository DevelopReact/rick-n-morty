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
      providesTags: [{ type: 'Location', id: 'LIST' }]
    }),
    getLocationId: build.query<ILocationId, number>({
      query: (id) => ({
        url: `/location/${id}`,
        method: 'GET'
      }),
      providesTags: (_, __, id) => [{ type: 'Location', id: id }]
    }),
    getLocationMultiple: build.query<ILocationId, number[]>({
      query: (id) => ({
        url: `/location/${[id]}`,
        method: 'GET'
      }),
      providesTags: [{ type: 'Location', id: 'LIST_ID' }]
    })
  })
});

export const {
  useGetLocationsQuery,
  useGetLocationIdQuery,
  useGetLocationMultipleQuery
} = locationAPI;
