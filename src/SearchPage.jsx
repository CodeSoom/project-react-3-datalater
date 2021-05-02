import React from 'react';

import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import BackButtonHeader from './BackButtonHeader';
import SearchFormContainer from './SearchFormContainer';
import SearchResultsContainer from './SearchResultsContainer';

export default function SearchPage({ params }) {
  const { id: playerId } = params || useParams();

  const Container = styled.div({
    margin: '0 20px',
  });

  return (
    <>
      <BackButtonHeader />
      <Container>
        <SearchFormContainer />
        <SearchResultsContainer
          playerId={playerId}
        />
      </Container>
    </>
  );
}
