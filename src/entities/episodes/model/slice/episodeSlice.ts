import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEpisode } from '../types/episodeTypes';

const initialState: IEpisode = {
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  },
  results: [
    {
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: ''
    }
  ]
};

export const episodeSlice = createSlice({
  name: 'episode',
  initialState: initialState,
  reducers: {
    setEpisodes(state, action: PayloadAction<IEpisode>) {
      state.info = action.payload.info;
      state.results = action.payload.results;
    }
  }
});

export const { actions: episodeAction, reducer: episodeReducer } = episodeSlice;
