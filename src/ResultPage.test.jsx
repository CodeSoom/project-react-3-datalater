import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ResultPage from './ResultPage';

import {
  loadMap,
} from './services/map';

jest.mock('react-redux');

jest.mock('./services/map');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('ResultPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      midpoints: given.midpoints,
      players: [
        { id: 0, name: 'A', selectedPlace: { name: 'place', x: 127, y: 37 } },
      ],
    }));

    loadMap.mockImplementation(() => null);
  });

  context('without midpoint places', () => {
    given('midpoints', () => []);

    it('renders not found midpoints message', () => {
      const { container } = render(<ResultPage />);

      expect(container).toHaveTextContent('중간지점을 찾지 못했습니다');
    });

    it('renders back button', () => {
      const { getByRole } = render(<ResultPage />);

      fireEvent.click(getByRole('button', { name: 'back' }));

      expect(mockPush).toBeCalledWith('/lobby');
    });
  });

  context('with midpoint places', () => {
    given('midpoints', () => [
      { id: 0, name: '복정역', address: '복정역 주소' },
    ]);

    it('renders the list of the recommended places', () => {
      const { container } = render(<ResultPage />);

      expect(container).toHaveTextContent('추천 장소');
    });

    it('renders the map with the markers of the recommended places', () => {
      render(<ResultPage />);

      const script = document.querySelector('script');
      script.onload();

      expect(loadMap).toHaveBeenCalled();
    });

    it('renders back button', () => {
      const { getByRole } = render(<ResultPage />);

      fireEvent.click(getByRole('button', { name: 'back' }));

      expect(mockPush).toBeCalledWith('/lobby');
    });
  });
});
