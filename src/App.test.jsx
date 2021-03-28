import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import {
  setCenter,
  setMap,
} from './services/map';

jest.mock('./services/map');

describe('App', () => {
  beforeEach(() => {
    setCenter.mockClear();
    setMap.mockClear();

    setCenter.mockImplementation(() => null);
    setMap.mockImplementation(() => null);
  });

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Where do we meet?');
  });

  it('renders map', () => {
    render(<App />);

    expect(setCenter).toHaveBeenCalled();
    expect(setMap).toHaveBeenCalled();
  });
});
