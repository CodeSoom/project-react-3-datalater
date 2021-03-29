import React from 'react';

import { render } from '@testing-library/react';

import PlayerAddress from './PlayerAddress';

jest.mock('react-redux');

describe('PlayerAddress', () => {
  it('renders player name', () => {
    const name = 'A';

    const { container } = render((
      <PlayerAddress
        name={name}
      />
    ));

    expect(container).toHaveTextContent(name);
  });
});
