import React from 'react';

import {
  MemoryRouter,
} from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import {
  setCenter,
  setMap,
} from './services/map';

jest.mock('react-redux');
jest.mock('./services/map');

describe('App', () => {
  beforeEach(() => {
    setCenter.mockClear();
    setMap.mockClear();

    setCenter.mockImplementation(() => null);
    setMap.mockImplementation(() => null);

    useSelector.mockImplementation((selector) => selector({
      searchFields: {
        query: '',
      },
      players: [],
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

  context('with invalid path', () => {
    it('renders not found page', () => {
      const { container } = renderApp({ path: '/xxx' });

      expect(container).toHaveTextContent('Not Found');
    });
  });
});
