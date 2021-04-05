import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import reducer, {
  changeSearchField,
  requestSearch,
  setSearchResults,
  selectPlace,
} from './slice';

const middlewares = getDefaultMiddleware();
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('actions', () => {
  let store;

  describe('requestSearch', () => {
    beforeEach(() => {
      store = mockStore({
        searchFields: {
          query: '',
        },
      });
    });

    it('dispatches setSearchResults', async () => {
      await store.dispatch(requestSearch());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSearchResults([]));
    });
  });
});

describe('reducer', () => {
  it('changes search field', () => {
    const initialState = {
      searchFields: {
        query: '',
      },
    };

    const state = reducer(
      initialState,
      changeSearchField({ name: 'query', value: '잠실역' }),
    );

    expect(state.searchFields.query).toBe('잠실역');
  });

  it('changes search results', () => {
    const initialState = {
      searchResults: [],
    };

    const state = reducer(
      initialState,
      setSearchResults([
        { id: 0, name: '잠실역', address: '잠실동 347' },
      ]),
    );

    expect(state.searchResults).toHaveLength(1);
  });

  it('changes player\'s selected place', () => {
    const initialState = {
      players: [
        { id: 0, name: 'A', selectedPlace: {} },
        { id: 1, name: 'B', selectedPlace: {} },
      ],
    };

    const playerId = 0;

    const selectedPlace = {
      name: '잠실역',
      address: '잠실동 347',
      x: 126,
      y: 37,
    };

    const state = reducer(
      initialState,
      selectPlace({
        playerId,
        selectedPlace,
      }),
    );

    expect(state.players).toEqual([
      { id: 0, name: 'A', selectedPlace },
      { id: 1, name: 'B', selectedPlace: {} },
    ]);
  });
});
