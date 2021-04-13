import React from 'react';

import styled from '@emotion/styled';

import SearchButton from './SearchButton';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0',
});

const NameContainer = styled.div({
  flex: 1,
  fontSize: '1.2em',
});

const ButtonContainer = styled.div({
  flex: 3,
});

export default function PlayerAddress({
  id, name, place, onClickSearchButton,
}) {
  function handleClickSearchButton() {
    onClickSearchButton(id);
  }

  return (
    <Container>
      <NameContainer>
        {name}
      </NameContainer>
      <ButtonContainer>
        <SearchButton
          id={id}
          text={place}
          onClickSearchButton={handleClickSearchButton}
        />
      </ButtonContainer>
    </Container>
  );
}
