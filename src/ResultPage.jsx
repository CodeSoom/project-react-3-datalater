import React from 'react';

import styled from '@emotion/styled';

import BackButtonHeader from './BackButtonHeader';
import MapContainer from './MapContainer';
import MidpointContainer from './MidpointContainer';

export default function ResultPage() {
  const Container = styled.div({
    margin: '0 20px',
  });

  return (
    <>
      <BackButtonHeader />
      <MapContainer />
      <Container>
        <MidpointContainer />
      </Container>
    </>
  );
}
