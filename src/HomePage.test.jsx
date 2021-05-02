import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import HomePage from './HomePage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

test('HomePage', () => {
  const { container, queryByText, getByText } = render(<HomePage />);

  expect(container).toHaveTextContent('중간지점');

  expect(queryByText('START')).not.toBeNull();

  fireEvent.click(getByText('START'));

  expect(mockPush).toBeCalledWith('/lobby');
});
