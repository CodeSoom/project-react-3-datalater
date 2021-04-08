import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ResultPage from './ResultPage';

jest.mock('react-redux');

describe('ResultPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      midpoints: given.midpoints,
    }));
  });

  context('without midpoint places', () => {
    given('midpoints', () => []);

    it('renders not found midpoints message', () => {
      const { container } = render(<ResultPage />);

      expect(container).toHaveTextContent('중간지점을 찾지 못했습니다');
    });
  });

  context('with midpoint places', () => {
    given('midpoints', () => [
      { id: 0, name: '복정역', address: '복정역 주소' },
    ]);

    it('renders recommended places', () => {
      const { container } = render(<ResultPage />);

      expect(container).toHaveTextContent('추천 장소');
    });
  });
});
