import React from 'react';

import { render } from '@testing-library/react';

import SearchResults from './SearchResults';

describe('SearchResults', () => {
  function renderSearchResults(searchResults) {
    return render((
      <SearchResults
        searchResults={searchResults}
      />
    ));
  }

  context('with results', () => {
    const searchResults = [
      { id: 0, place_name: '잠실역 1번 출구', address_name: '잠실동 347' },
    ];

    it('renders search results', () => {
      const { container } = renderSearchResults(searchResults);

      expect(container).toHaveTextContent('잠실역 1번 출구');
      expect(container).toHaveTextContent('잠실동 347');
    });
  });

  context('without results', () => {
    const searchResults = [];

    it('renders no results message', () => {
      const { container } = renderSearchResults(searchResults);

      expect(container).toHaveTextContent('검색결과가 없습니다');
    });
  });
});
