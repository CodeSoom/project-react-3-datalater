import React from 'react';

import LobbyContainer from './LobbyContainer';
import SearchFormContainer from './SearchFormContainer';
import MapContainer from './MapContainer';

export default function App() {
  return (
    <div>
      <h1>Where do we meet?</h1>
      <LobbyContainer />
      <SearchFormContainer />
      <MapContainer />
    </div>
  );
}
