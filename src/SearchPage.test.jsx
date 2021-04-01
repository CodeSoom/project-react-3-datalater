import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import SearchPage from './SearchPage';

jest.mock('react-redux');

describe('SearchPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      searchFields: {
        query: '',
      },
    }));
  });

  it('renders input control', () => {
    const { queryByLabelText } = render((
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    ));

    expect(queryByLabelText('주소 입력')).not.toBeNull();
  });

  it('renders "검색" button', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    ));

    expect(queryByText('검색')).not.toBeNull();
  });
});
