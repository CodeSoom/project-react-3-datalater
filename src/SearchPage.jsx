import React from 'react';

import { useParams } from 'react-router-dom';

import SearchFormContainer from './SearchFormContainer';
import SearchResultsContainer from './SearchResultsContainer';

export default function SearchPage({ params }) {
  const { id: playerId } = params || useParams();

  return (
    <>
      <SearchFormContainer />
      <SearchResultsContainer
        playerId={playerId}
      />
    </>
  );
}
