import React from 'react';

export default function MidpointButton({ isEachAddressRegistered, onClick }) {
  if (isEachAddressRegistered) {
    return (
      <button
        type="button"
        onClick={onClick}
      >
        중간지점 찾기
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled
    >
      참여 인원의 주소가 모두 등록되지 않았습니다
    </button>
  );
}
