import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import SearchButton from './SearchButton';

describe('SearchButton', () => {
  const handleClickSearchButton = jest.fn();

  beforeEach(() => {
    handleClickSearchButton.mockClear();
  });

  context('without selected place', () => {
    it('renders "찾기" button with a link to search page', () => {
      const { getByText } = render((
        <MemoryRouter>
          <SearchButton
            onClickSearchButton={handleClickSearchButton}
          />
        </MemoryRouter>
      ));

      fireEvent.click(getByText('찾기'));

      expect(handleClickSearchButton).toBeCalled();
    });
  });

  context('with selected place', () => {
    it('renders button text of selected place name', () => {
      const { getByText } = render((
        <MemoryRouter>
          <SearchButton
            onClickSearchButton={handleClickSearchButton}
            text="잠실역"
          />
        </MemoryRouter>
      ));

      fireEvent.click(getByText('잠실역'));

      expect(handleClickSearchButton).toBeCalled();
    });
  });
});
