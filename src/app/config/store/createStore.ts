//redux
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
//api
import { jsonPlaceholderAPI } from '@/shared/api/jsonPlaceholderAPI';
//schema
import { StateSchema } from './stateSchema';
import { episodeReducer } from '@/entities/episodes/model/slice/episodeSlice';

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
    episode: episodeReducer
  };

  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderAPI.middleware)
  });

  return store;
};
