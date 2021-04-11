import React from 'react';

import { render } from '@testing-library/react';

import MapContainer from './MapContainer';

import {
  setCenter,
  loadMap,
  createMap,
} from './services/map';

jest.mock('./services/map');

describe('MapContainer', () => {
  const loadMapCallback = () => {
    setCenter();
    createMap();
  };

  beforeEach(() => {
    loadMap.mockClear();
    setCenter.mockClear();
    createMap.mockClear();

    loadMap.mockImplementation(() => loadMapCallback());
    setCenter.mockImplementation(() => null);
    createMap.mockImplementation(() => null);
  });

  it('renders map', () => {
    render(<MapContainer />);

    const script = document.querySelector('script');

    script.onload();

    expect(loadMap).toHaveBeenCalled();
    expect(setCenter).toHaveBeenCalled();
    expect(createMap).toHaveBeenCalled();
  });
});
