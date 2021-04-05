import React from 'react';

import SearchButton from './SearchButton';

export default function PlayerAddress({ id, name, place }) {
  return (
    <>
      <div>
        {name}
      </div>
      <div>
        <SearchButton
          id={id}
          text={place}
        />
      </div>
    </>
  );
}
