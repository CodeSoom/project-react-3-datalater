import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import LobbyPage from './LobbyPage';
import SearchPage from './SearchPage';
import ResultPage from './ResultPage';

import {
  selectPlace,
  setMidpoints,
} from './slice';

import { loadItem } from './services/storage';

function NotFoundPage() {
  return (
    <h2>Not Found</h2>
  );
}

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

  return (
    <div>
      <h1>
        <Link to="/">Where do we meet?</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={LobbyPage} />
        <Route path="/search/:id" component={SearchPage} />
        <Route path="/result" component={ResultPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
