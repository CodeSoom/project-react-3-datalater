import React, { useEffect } from 'react';

import {
  setCenter,
  setMap,
} from './services/map';

export default function MapContainer() {
  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: setCenter(33.450701, 126.570667),
      level: 3,
    };

    setMap(container, options);
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }} />
    </>
  );
}
