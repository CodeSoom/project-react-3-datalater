import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import PlayerAddress from './PlayerAddress';
import MidpointButton from './MidpointButton';

import {
  requestMidpoints,
} from './slice';

import {
  get,
  isEmptyArray,
} from './utils';

export default function LobbyContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

  const players = useSelector(get('players'));
  const isEachAddressRegistered = useSelector(get('isEachAddressRegistered'));

  const handleClick = useCallback(() => {
    dispatch(requestMidpoints());
    history.push('/result');
  }, [dispatch]);

  const handleClickSearchButton = useCallback((id) => {
    const url = `/search/${id}`;
    history.push(url);
  }, [dispatch]);

  if (isEmptyArray(players)) {
    return (
      <>
        <h2>출발지점을 입력하세요.</h2>
        <p>참여 인원이 없습니다.</p>
      </>
    );
  }

  const Container = styled.div({
    margin: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  });

  const SearchContainer = styled.div();

  const Header = styled.header({
    margin: '40px 0',
    fontSize: '1.5em',
    fontWeight: 'bold',
  });

  const List = styled.ul({
    listStyle: 'none',
  });

  const ButtonContainer = styled.div({
    marginBottom: '40px',
  });

  return (
    <Container>
      <SearchContainer>
        <Header>출발지점을 입력하세요.</Header>
        <List>
          {players.map(({ id, name, selectedPlace: { name: place } }) => (
            <li key={id}>
              <PlayerAddress
                id={id}
                name={name}
                place={place}
                onClickSearchButton={handleClickSearchButton}
              />
            </li>
          ))}
        </List>
      </SearchContainer>
      <ButtonContainer>
        <MidpointButton
          isEachAddressRegistered={isEachAddressRegistered}
          onClick={handleClick}
        />
      </ButtonContainer>
    </Container>
  );
}
