import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MidpointContainer from './MidpointContainer';

jest.mock('react-redux');

describe('MidpointContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

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
    const id = 0;
    const name = '복정역';
    const address = '복정역 주소';
    const x = 127;
    const y = 37;

    const midpoints = [
      {
        id, name, address, x, y,
      },
    ];

    given('midpoints', () => midpoints);

    it('renders midpoints', () => {
      const { queryByText } = render(<MidpointContainer />);

      expect(queryByText(name)).not.toBeNull();
    });

    it('selects midpoint', () => {
      const { getByText } = render(<MidpointContainer />);

      fireEvent.click(getByText(name));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectMidpoint',
        payload: id,
      });
    });
  });
});
