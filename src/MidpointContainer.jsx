import React from 'react';

import { useSelector } from 'react-redux';

import MidpointButton from './MidpointButton';

import { get } from './utils';

export default function MidpointContainer() {
  const isEachAddressRegistered = useSelector(get('isEachAddressRegistered'));

  if (!isEachAddressRegistered) {
    return (
      <p>참여 인원의 주소가 모두 등록되지 않았습니다</p>
    );
  }

  return (
    <MidpointButton />
  );
}
