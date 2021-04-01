import React from 'react';

import SearchButton from './SearchButton';

export default function PlayerAddress({ id, name }) {
  return (
    <>
      <div>
        {name}
      </div>
      <div>
        <SearchButton
          id={id}
        />
      </div>
    </>
  );
}
