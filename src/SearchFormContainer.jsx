import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchForm from './SearchForm';

import {
  changeSearchField,
  requestSearch,
} from './slice';

import {
  get,
  isEmptyString,
} from './utils';

export default function SearchFormContainer() {
  const dispatch = useDispatch();

  const searchFields = useSelector(get('searchFields'));
  const { query } = searchFields;

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeSearchField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (isEmptyString(query)) {
      return;
    }

    dispatch(requestSearch());
  }, [dispatch]);

  return (
    <div>
      <SearchForm
        fields={searchFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
