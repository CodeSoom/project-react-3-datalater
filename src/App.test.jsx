import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import {
  loadMap,
} from './services/map';

import { loadItem } from './services/storage';

jest.mock('react-redux');
jest.mock('./services/map');
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    loadMap.mockImplementation(() => null);

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      players: [],
      searchFields: {
        query: '',
      },
      searchResults: [],
      midpoints: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders header', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Where do we meet?');
    });

    it('renders search form', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('출발지점을 입력하세요');
    });
  });

  context('with path /search/:id', () => {
    it('renders search page', () => {
      const { container } = renderApp({ path: '/search/0' });

      expect(container).toHaveTextContent('주소 입력');
    });
  });

  context('with path /result', () => {
    it('renders result page', () => {
      const { container } = renderApp({ path: '/result' });

      expect(container).toHaveTextContent('중간지점');
    });
  });

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });

  context('when players already chose a place', () => {
    const playerId = 0;
    const name = '잠실역 1번 출구';
    const address = '잠실동 347';
    const x = 126;
    const y = 37;

    beforeEach(() => {
      const players = JSON.stringify([
        {
          id: playerId,
          name: 'A',
          selectedPlace: {
            name,
            address,
            x,
            y,
          },
        },
      ]);

      loadItem.mockImplementation(() => players);
    });

    it('calls dispatch with "selectPlace" action', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith({
        type: 'application/selectPlace',
        payload: {
          playerId,
          selectedPlace: {
            name,
            address,
            x,
            y,
          },
        },
      });
    });
  });

  context('with midpoints', () => {
    const savedMidpoints = [
      {
        id: 0, address: '주소', name: '이름', x: 126, y: 37,
      },
    ];

    beforeEach(() => {
      const midpoints = JSON.stringify(savedMidpoints);

      loadItem.mockImplementation(() => midpoints);
    });

    it('calls dispatch with "setMidpoints" action', () => {
      renderApp({ path: '/' });

      expect(dispatch).toBeCalledWith({
        type: 'application/setMidpoints',
        payload: savedMidpoints,
      });
    });
  });
});
