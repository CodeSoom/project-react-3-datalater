import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { loadMap } from './services/map';

import { get } from './utils';

export default function MapContainer() {
  const players = useSelector(get('players'));
  const midpoints = useSelector(get('midpoints'));

  const selectedPlaces = players.map(({ selectedPlace }) => selectedPlace);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js'
    + '?autoload=false'
    + `&appkey=${process.env.JS_API_KEY}`
    + '&libraries=services,clusterer,drawing';

    document.body.appendChild(script);

    script.onload = () => {
      loadMap({ selectedPlaces, midpoints });
    };
  }, [players, midpoints]);

  return (
    <>
      <div id="map" style={{ width: '100%', height: 400 }} />
    </>
  );
}
