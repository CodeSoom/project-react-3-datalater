import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchFormContainer from './SearchFormContainer';

jest.mock('react-redux');

describe('SearchFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      searchFields: {
        query: given.query,
      },
    }));
  });

  context('with query', () => {
    given('query', () => '잠실역');

    it('renders input controls', () => {
      const { queryByLabelText } = render(<SearchFormContainer />);

      expect(queryByLabelText('주소 입력')).not.toBeNull();
    });

    it('listens to change events', () => {
      const { getByLabelText } = render(<SearchFormContainer />);

      fireEvent.change(getByLabelText('주소 입력'), {
        target: { name: 'query', value: '복정역' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeSearchField',
        payload: { name: 'query', value: '복정역' },
      });
    });

    it('renders "검색" button', () => {
      const { getByText } = render(<SearchFormContainer />);

      fireEvent.click(getByText('검색'));

      expect(dispatch).toBeCalled();
    });
  });

  context('with empty query', () => {
    given('query', () => '');

    it('does not add', () => {
      const { getByText } = render(<SearchFormContainer />);

      fireEvent.click(getByText('검색'));

      expect(dispatch).not.toBeCalled();
    });
  });
});
