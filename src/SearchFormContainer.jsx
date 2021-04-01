import React from 'react';

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

  const places = useSelector(get('places'));
  const searchFields = useSelector(get('searchFields'));
  const { query } = searchFields;

  function handleChange({ name, value }) {
    dispatch(changeSearchField({ name, value }));
  }

  function handleSubmit() {
    if (isEmptyString(query)) {
      return;
    }

    dispatch(requestSearch());
  }

  return (
    <div>
      <SearchForm
        fields={searchFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>
        { JSON.stringify(places)}
      </p>
    </div>
  );
}