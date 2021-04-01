import { createSlice } from '@reduxjs/toolkit';

import {
  postSearch,
} from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    players: [
      { id: 0, name: 'A', address: '' },
      { id: 1, name: 'B', address: '' },
    ],
    searchFields: {
      query: '',
    },
    searchResults: [],
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

    setSearchResults(state, { payload: searchResults }) {
      return {
        ...state,
        searchResults,
      };
    },
  },
});

export const {
  changeSearchField,
  setSearchResults,
} = actions;

export function requestSearch() {
  return async (dispatch, getState) => {
    const { searchFields: { query } } = getState();

    const searchResults = await postSearch(query);

    dispatch(setSearchResults(searchResults));
  };
}

export default reducer;
