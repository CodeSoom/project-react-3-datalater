import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BackButtonHeader from './BackButtonHeader';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

test('BackButtonHeader', () => {
  const { getByRole } = render(<BackButtonHeader />);

  fireEvent.click(getByRole('button', { name: 'back' }));

  expect(mockPush).toBeCalledWith('/lobby');
});
