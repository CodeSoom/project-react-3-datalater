import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    searchFields: {
      place: '',
    },
    places: [],
    players: [
      { id: 0, name: 'A', address: '' },
      { id: 1, name: 'B', address: '' },
    ],
  },
  reducers: {
    changeSearchField(state, { payload: { name, value } }) {
      const { searchFields } = state;

      return {
        ...state,
        searchFields: {
          ...searchFields,
          [name]: value,
        },
      };
    },

    addPlace(state) {
      const { searchFields: { place }, places } = state;

      return {
        ...state,
        places: [...places, place],
      };
    },
  },
});

export const {
  changeSearchField,
  addPlace,
} = actions;

export default reducer;
