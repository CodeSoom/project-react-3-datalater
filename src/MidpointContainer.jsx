import React from 'react';
import { useSelector } from 'react-redux';
import { get, isEmptyArray } from './utils';

export default function MidpointContainer() {
  const midpoints = useSelector(get('midpoints'));

  if (isEmptyArray(midpoints)) {
    return (
      <p>중간지점을 찾지 못했습니다.</p>
    );
  }

  return (
    <>
      <h2>추천 장소</h2>
      <ul>
        { midpoints.map(({ id, name, address }) => (
          <li key={id}>
            <div>
              {name}
            </div>
            <div>
              {address}
            </div>
          </li>
        )) }
      </ul>
    </>
  );
}
