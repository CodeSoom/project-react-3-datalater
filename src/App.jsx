import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { breakpoints } from './designSystem';

import LobbyPage from './LobbyPage';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';
import NotFoundPage from './NotFoundPage';

import {
  selectPlace,
  setMidpoints,
} from './slice';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const players = loadItem('players')
    ? JSON.parse(loadItem('players'))
    : [];

  if (players.length !== 0) {
    players.forEach(({ id, selectedPlace }) => {
      dispatch(selectPlace({
        playerId: id,
        selectedPlace,
      }));
    });
  }

  const midpoints = loadItem('midpoints')
    ? JSON.parse(loadItem('midpoints'))
    : [];

  if (midpoints.length !== 0) {
    dispatch(setMidpoints(midpoints));
  }

  const Container = styled.div({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',

    [breakpoints.minDesktop]: {
      maxWidth: '940px',
      margin: '0 auto',
    },
  });

  const Header = styled.header({
    margin: '0',
    background: '#eee',
    textAlign: 'center',
    fontSize: '0.5em',
  });

  const Main = styled.main({
    height: '100%',
  });

  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">Where do we meet?</Link>
        </h1>
      </Header>
      <Main>
        <Switch>
          <Route exact path="/" component={LobbyPage} />
          <Route path="/search/:id" component={SearchPage} />
          <Route path="/result" component={ResultPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
    </Container>
  );
}
