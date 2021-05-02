import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import SearchPage from './SearchPage';

jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

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

  it('renders search and back button', () => {
    const { queryByRole, getByRole } = renderSearchPage();

    expect(queryByRole('button', { name: 'search' })).not.toBeNull();

    expect(queryByRole('button', { name: 'back' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: 'back' }));

    expect(mockPush).toBeCalledWith('/lobby');
  });

  it('renders search results', () => {
    const { queryByText } = renderSearchPage();

    expect(queryByText('검색결과')).not.toBeNull();
  });
});
