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
      searchResults: [],
    }));
  });

  function renderSearchPage() {
    return render((
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    ));
  }

  it('renders input control', () => {
    const { queryByLabelText } = renderSearchPage();

    expect(queryByLabelText('주소 입력')).not.toBeNull();
  });

  it('renders "검색" button', () => {
    const { queryByText } = renderSearchPage();

    expect(queryByText('검색')).not.toBeNull();
  });

  it('renders search results', () => {
    const { queryByText } = renderSearchPage();

    expect(queryByText('검색결과')).not.toBeNull();
  });
});
