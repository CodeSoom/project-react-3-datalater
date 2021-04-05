import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LobbyPage from './LobbyPage';

jest.mock('react-redux');

describe('LobbyPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      players: [],
    }));
  });

  it('renders lobby page', () => {
    render((
      <MemoryRouter>
        <LobbyPage />
      </MemoryRouter>
    ));
  });
});
