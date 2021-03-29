import React from 'react';

function SearchButton() {
  return (
    <button type="button">찾기</button>
  );
}

export default function PlayerAddress({ name }) {
  return (
    <>
      <div>
        {name}
      </div>
      <div>
        <SearchButton />
      </div>
    </>
  );
}
