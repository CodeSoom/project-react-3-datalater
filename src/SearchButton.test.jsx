import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SearchButton from './SearchButton';

describe('SearchButton', () => {
  it('renders "찾기" button with a link to search page', () => {
    const { queryByText, container } = render((
      <MemoryRouter>
        <SearchButton
          id="0"
        />
      </MemoryRouter>
    ));

    expect(queryByText('찾기')).not.toBeNull();
    expect(container.innerHTML).toContain('<a href="');
  });
});
