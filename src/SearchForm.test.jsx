import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderSearchForm(searchFields) {
    return render((
      <SearchForm
        fields={searchFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const searchFields = {
      place: '',
    };

    const { queryByLabelText } = renderSearchForm(searchFields);

    expect(queryByLabelText('출발지점')).not.toBeNull();
  });

  it('listens to the change events', () => {
    const searchFields = {
      place: '잠실역',
    };

    const { getByLabelText } = renderSearchForm(searchFields);

    fireEvent.change(getByLabelText('출발지점'), {
      target: { value: '복정역' },
    });

    expect(handleChange).toBeCalledWith({ name: 'place', value: '복정역' });
  });

  it('renders "추가" button', () => {
    const searchFields = {
      place: '잠실역',
    };

    const { getByText } = renderSearchForm(searchFields);

    fireEvent.click(getByText('추가'));

    expect(handleSubmit).toBeCalled();
  });
});
