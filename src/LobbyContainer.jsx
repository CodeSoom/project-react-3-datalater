import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

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

  function handleClick() {
    dispatch(requestMidpoints());
    history.push('/result');
  }

  if (isEmptyArray(players)) {
    return (
      <>
        <h2>출발지점을 입력하세요.</h2>
        <p>참여 인원이 없습니다.</p>
      </>
    );
  }

  return (
    <>
      <h2>출발지점을 입력하세요.</h2>
      <ul>
        {players.map(({ id, name, selectedPlace: { name: place } }) => (
          <li key={id}>
            <PlayerAddress
              id={id}
              name={name}
              place={place}
            />
          </li>
        ))}
      </ul>
      <MidpointButton
        isEachAddressRegistered={isEachAddressRegistered}
        onClick={handleClick}
      />
    </>
  );
}
