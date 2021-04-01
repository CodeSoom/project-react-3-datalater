import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import LobbyPage from './LobbyPage';
import SearchPage from './SearchPage';

function NotFoundPage() {
  return (
    <h2>Not Found</h2>
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">Where do we meet?</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={LobbyPage} />
        <Route path="/search/:id" component={SearchPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
