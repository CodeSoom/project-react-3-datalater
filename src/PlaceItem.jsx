import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

function PlaceItem({
  name, address, x, y, onClick,
}) {
  function handleClick() {
    onClick({
      name, address, x, y,
    });
  }

  const Item = styled.li({
    borderBottom: `1px solid ${colors.gray}`,
    padding: '1em',
    fontSize: '1.2em',

    '$:hover': {
      cursor: 'pointer',
    },

    '& a': {
      textDecoration: 'none',
      color: colors.black,
    },
  });

  return (
    <Item>
      <a href="/" onClick={handleClick}>
        <div>{name}</div>
        <div>{address}</div>
      </a>
    </Item>
  );
}

export default React.memo(PlaceItem);
