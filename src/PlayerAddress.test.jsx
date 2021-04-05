import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import PlayerAddress from './PlayerAddress';

jest.mock('react-redux');

describe('PlayerAddress', () => {
  it('renders player name', () => {
    const name = 'A';

    const { container } = render((
      <MemoryRouter>
        <PlayerAddress
          id="0"
          name={name}
          place="잠실역"
        />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent(name);
  });
});
