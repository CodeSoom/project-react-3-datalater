import React, { useEffect } from 'react';

import {
  loadMap,
} from './services/map';

export default function MapContainer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js'
    + '?autoload=false'
    + `&appkey=${process.env.JS_API_KEY}`
    + '&libraries=services,clusterer,drawing';

    document.body.appendChild(script);

    script.onload = () => loadMap();
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 400 }} />
    </>
  );
}
