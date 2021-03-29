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
        place: given.place,
      },
    }));
  });

  context('with place', () => {
    given('place', () => '잠실역');

    it('renders input controls', () => {
      const { queryByLabelText } = render(<SearchFormContainer />);

      expect(queryByLabelText('출발지점')).not.toBeNull();
    });

    it('listens to change events', () => {
      const { getByLabelText } = render(<SearchFormContainer />);

      fireEvent.change(getByLabelText('출발지점'), {
        target: { name: 'place', value: '복정역' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeSearchField',
        payload: { name: 'place', value: '복정역' },
      });
    });

    it('renders "추가" button', () => {
      const { getByText } = render(<SearchFormContainer />);

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalled();
    });
  });

  context('with empty place', () => {
    given('place', () => '');

    it('does not add', () => {
      const { getByText } = render(<SearchFormContainer />);

      fireEvent.click(getByText('추가'));

      expect(dispatch).not.toBeCalled();
    });
  });
});
