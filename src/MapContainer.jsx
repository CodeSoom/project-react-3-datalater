import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { colors, size } from './designSystem';

import { loadMap } from './services/map';

import { get } from './utils';

export default function MapContainer() {
  const players = useSelector(get('players'));
  const midpoints = useSelector(get('midpoints'));
  const selectedMidpoint = useSelector(get('selectedMidpoint'));

  const selectedPlaces = players.map(({ selectedPlace }) => selectedPlace);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js'
    + '?autoload=false'
    + `&appkey=${process.env.JS_API_KEY}`
    + '&libraries=services,clusterer,drawing';

    document.body.appendChild(script);

    script.onload = () => {
      loadMap({
        selectedPlaces,
        midpoints,
        selectedMidpoint,
      });
    };
  }, [players, midpoints, selectedMidpoint]);

  const Map = styled.div({
    width: size.mapWidth,
    height: size.mapHeight,

    '& #selectedplace': {
      position: 'relative',
      top: '5px',
      left: '8px',
      width: '7em',
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
      wordBreak: 'keep-all',
      fontSize: '0.7em',
      fontWeight: 'bold',
      color: colors.black,
    },
  });

  return (
    <Map id="map" />
  );
}
