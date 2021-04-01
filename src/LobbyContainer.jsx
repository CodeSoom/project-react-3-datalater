import React from 'react';

import { useSelector } from 'react-redux';

import PlayerAddress from './PlayerAddress';

import { get, isEmptyArray } from './utils';

export default function LobbyContainer() {
  const players = useSelector(get('players'));

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
        {players.map(({ id, name }) => (
          <li key={id}>
            <PlayerAddress
              id={id}
              name={name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
