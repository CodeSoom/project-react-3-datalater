import React from 'react';

import { render } from '@testing-library/react';

import MapContainer from './MapContainer';

import {
  setCenter,
  setMap,
} from './services/map';

jest.mock('./services/map');

describe('MapContainer', () => {
  beforeEach(() => {
    setCenter.mockClear();
    setMap.mockClear();

    setCenter.mockImplementation(() => null);
    setMap.mockImplementation(() => null);
  });

  it('renders map', () => {
    render(<MapContainer />);

    expect(setCenter).toHaveBeenCalled();
    expect(setMap).toHaveBeenCalled();
  });
});
