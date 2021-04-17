import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());

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
      query: '',
    };

    const { queryByLabelText } = renderSearchForm(searchFields);

    expect(queryByLabelText('주소 입력')).not.toBeNull();
  });

  it('listens to the change events', () => {
    const searchFields = {
      query: '잠실역',
    };

    const { getByLabelText } = renderSearchForm(searchFields);

    fireEvent.change(getByLabelText('주소 입력'), {
      target: { value: '복정역' },
    });

    expect(handleChange).toBeCalledWith({ name: 'query', value: '복정역' });
  });

  it('renders search button', () => {
    const searchFields = {
      query: '잠실역',
    };

    const { getByRole } = renderSearchForm(searchFields);

    fireEvent.click(getByRole('button'));

    expect(handleSubmit).toBeCalled();
  });
});
