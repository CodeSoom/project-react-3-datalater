import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchResults from './SearchResults';

import {
  selectPlace,
} from './slice';

import { get } from './utils';

export default function SearchResultsContainer({ playerId }) {
  const dispatch = useDispatch();

  const searchResults = useSelector(get('searchResults'));

  const handleClick = useCallback((selectedPlace) => {
    dispatch(selectPlace({ playerId, selectedPlace }));
  }, [dispatch]);

  return (
    <SearchResults
      searchResults={searchResults}
      onClick={handleClick}
    />
  );
}
