import { createSlice } from '@reduxjs/toolkit';

import {
  postSearch,
} from './services/api';

import {
  equal,
} from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    players: [
      { id: 0, name: 'A', selectedPlace: {} },
      { id: 1, name: 'B', selectedPlace: {} },
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

    selectPlace(state, { payload: { playerId, selectedPlace } }) {
      const { players } = state;

      return {
        ...state,
        players: players.map((player) => {
          if (player.id === playerId) {
            return {
              ...player,
              selectedPlace,
            };
          }

          return player;
        }),
      };
    },
  },
});

export const {
  changeSearchField,
  setSearchResults,
  selectPlace,
} = actions;

export function requestSearch() {
  return async (dispatch, getState) => {
    const { searchFields: { query } } = getState();

    const searchResults = await postSearch(query);

    dispatch(setSearchResults(searchResults));
  };
}

export default reducer;
