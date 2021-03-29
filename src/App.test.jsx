import React from 'react';

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
        place: '',
      },
      players: [],
    }));
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Where do we meet?');
  });

  it('renders search form', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('출발지점을 입력하세요');
  });

  it('renders map', () => {
    render(<App />);

    expect(setCenter).toHaveBeenCalled();
    expect(setMap).toHaveBeenCalled();
  });

  it('renders input form', () => {
    const { queryByLabelText } = render(<App />);

    expect(queryByLabelText('출발지점')).not.toBeNull();
  });
});
