import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import reducer, {
  changeSearchField,
  requestSearch,
  setSearchResults,
  selectPlace,
  setMidpoints,
  requestMidpoints,
  selectMidpoint,
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

  describe('requestMidpoints', () => {
    beforeEach(() => {
      store = mockStore({
        players: [
          {
            selectedPlace: {
              name: '잠실역',
              address: '잠실동 347',
              x: 126,
              y: 37,
            },
          },
          {
            selectedPlace: {
              name: '정자역',
              address: '정자동 6',
              x: 127,
              y: 37,
            },
          },
        ],
      });
    });

    it('dispatches setMidpoints', async () => {
      await store.dispatch(requestMidpoints());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setMidpoints([]));
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

  context('without any address registered', () => {
    const initialState = {
      players: [
        { id: 0, name: 'A', selectedPlace: {} },
        { id: 1, name: 'B', selectedPlace: {} },
      ],
      isEachAddressRegistered: false,
    };

    it('changes player\'s selected place', () => {
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

      expect(state.isEachAddressRegistered).toEqual(false);
    });
  });

  context('with only one address not registered', () => {
    const initialState = {
      players: [
        {
          id: 0,
          name: 'A',
          selectedPlace: {
            name: '잠실역',
            address: '잠실동 347',
            x: 126,
            y: 37,
          },
        },
        { id: 1, name: 'B', selectedPlace: {} },
      ],
      isEachAddressRegistered: false,
    };

    it('changes whether each address is registered when the only one left player selects the place', () => {
      const playerId = 1;

      const selectedPlace = {
        name: '정자역',
        address: '정자동 6',
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

      expect(state.players[1]).toEqual({ id: 1, name: 'B', selectedPlace });
      expect(state.isEachAddressRegistered).toEqual(true);
    });
  });

  it('changes midpoints', () => {
    const initialState = {
      midpoints: [],
    };

    const midpoints = [
      {
        id: 0,
        name: '여의도역',
        address: '여의도역 주소',
        x: 126,
        y: 37,
      },
    ];

    const state = reducer(initialState, setMidpoints(midpoints));

    expect(state.midpoints).toHaveLength(1);
  });

  it('change selected midpoint', () => {
    const initialState = {
      midpoints: [
        {
          id: 0, name: '복정역1', address: '복정역 주소1', x: 127, y: 37,
        },
      ],
    };

    const state = reducer(initialState, selectMidpoint(0));

    expect(state.selectedMidpoint).toEqual({
      id: 0, name: '복정역1', address: '복정역 주소1', x: 127, y: 37,
    });
  });
});
