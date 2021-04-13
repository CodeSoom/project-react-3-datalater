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

export default function SearchResults({ searchResults, onClick }) {
  const Header = styled.header({
    margin: '40px 0',
    fontSize: '1.5em',
    fontWeight: 'bold',
  });

  const NoResultMessage = styled.p({
    textAlign: 'center',
  });

  const List = styled.ul({
    listStyle: 'none',
  });

  return (
    <>
      <Header>검색결과</Header>
      { searchResults.length === 0
        ? <NoResultMessage>검색결과가 없습니다.</NoResultMessage>
        : (
          <List>
            { searchResults.map(({
              id, x, y, name, address,
            }) => (
              <PlaceItem
                key={id}
                name={name}
                address={address}
                x={x}
                y={y}
                onClick={onClick}
              />
            ))}
          </List>
        )}
    </>
  );
}
