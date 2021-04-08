import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MidpointContainer from './MidpointContainer';

jest.mock('react-redux');

describe('MidpointContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      midpoints: given.midpoints,
    }));
  });

  context('without midpoints', () => {
    given('midpoints', () => []);

    it('renders no midpoints message', () => {
      const { container } = render(<MidpointContainer />);

      expect(container).toHaveTextContent('중간지점을 찾지 못했습니다');
    });
  });

  context('with midpoints', () => {
    const midpoints = [
      {
        id: 0, name: '중간1', addres: '중간1 주소', x: 126, y: 37,
      },
    ];

    given('midpoints', () => midpoints);

    it('renders midpoints', () => {
      const { queryByText } = render(<MidpointContainer />);

      expect(queryByText('중간1')).not.toBeNull();
    });
  });
});
