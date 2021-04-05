import { createSlice } from '@reduxjs/toolkit';

import {
  postKeywordSearch,
} from './services/api';

import { saveItem } from './services/storage';

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
      const { players: previousPlayers } = state;

      const players = previousPlayers.map((player) => {
        if (player.id === +playerId) {
          return {
            ...player,
            selectedPlace,
          };
        }

        return player;
      });

      saveItem('players', JSON.stringify(players));

      return {
        ...state,
        players,
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

    const searchResults = await postKeywordSearch(query);

    dispatch(setSearchResults(searchResults));
  };
}

export default reducer;
