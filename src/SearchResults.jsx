import React from 'react';

import styled from '@emotion/styled';

import PlaceItem from './PlaceItem';

function SearchResults({ searchResults, onClick }) {
  const Header = styled.header({
    margin: '40px 0',
    fontSize: '1.5em',
    fontWeight: 'bold',
  });

  const NoResultMessage = styled.p({
    textAlign: 'center',
    fontSize: '1.2em',
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

export default React.memo(SearchResults);
