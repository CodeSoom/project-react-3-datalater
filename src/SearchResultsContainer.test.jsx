import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchResultsContainer from './SearchResultsContainer';

jest.mock('react-redux');

describe('SearchResultsContainer', () => {
  const dispatch = jest.fn();
  const playerId = '1';

  function renderSearchResultsContainer() {
    return render((
      <SearchResultsContainer
        playerId={playerId}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      searchResults: given.searchResults,
    }));
  });

  context('with results', () => {
    const name = '잠실역 1번 출구';
    const address = '잠실동 347';
    const x = 126;
    const y = 37;

    given('searchResults', () => [
      {
        id: 0,
        name,
        address,
        x,
        y,
      },
    ]);

    it('renders search results', () => {
      const { container } = renderSearchResultsContainer();

      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(address);
    });

    it('selects the place when the result item is clicked', () => {
      const { getByText } = renderSearchResultsContainer();

      fireEvent.click(getByText(name));

      expect(dispatch).toBeCalledWith({
        type: 'application/selectPlace',
        payload: {
          playerId,
          selectedPlace: {
            name,
            address,
            x,
            y,
          },
        },
      });
    });
  });

  context('without results', () => {
    given('searchResults', () => []);

    it('renders no results message', () => {
      const { container } = render(<SearchResultsContainer />);

      expect(container).toHaveTextContent('검색결과가 없습니다');
    });
  });
});
