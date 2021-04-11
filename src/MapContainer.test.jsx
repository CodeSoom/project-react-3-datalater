import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MapContainer from './MapContainer';

import {
  getPosition,
  loadMap,
  createMap,
} from './services/map';

jest.mock('react-redux');
jest.mock('./services/map');

describe('MapContainer', () => {
  const loadMapCallback = () => {
    getPosition();
    createMap();
  };

  beforeEach(() => {
    loadMap.mockClear();
    getPosition.mockClear();
    createMap.mockClear();

    loadMap.mockImplementation(() => loadMapCallback());
    getPosition.mockImplementation(() => null);
    createMap.mockImplementation(() => null);

    useSelector.mockImplementation((selector) => selector({
      players: [
        { id: 0, name: 'A', selectedPlace: { name: 'place', x: 127, y: 37 } },
      ],
    }));
  });

  it('renders map', () => {
    render(<MapContainer />);

    const script = document.querySelector('script');

    script.onload();

    expect(loadMap).toHaveBeenCalled();
    expect(getPosition).toHaveBeenCalled();
    expect(createMap).toHaveBeenCalled();
  });
});
