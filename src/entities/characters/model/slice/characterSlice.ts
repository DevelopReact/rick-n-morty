import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacterFilter } from '../types/characterType';

const initialState: ICharacterFilter = {
  isFiltered: false,
  status: '',
  gender: ''
};

export const characterSlice = createSlice({
  name: 'character',
  initialState: initialState,
  reducers: {
    filterCharacter(_, action: PayloadAction<ICharacterFilter>) {
      return action.payload;
    }
  }
});

export const { actions: filterCharacterAction, reducer: characterReducer } =
  characterSlice;
