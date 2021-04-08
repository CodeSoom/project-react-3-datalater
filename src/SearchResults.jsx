import React from 'react';

function PlaceItem({
  name, address, x, y, onClick,
}) {
  function handleClick() {
    onClick({
      name, address, x, y,
    });
  }

  return (
    <li>
      <a href="/" onClick={handleClick}>
        <div>{name}</div>
        <div>{address}</div>
      </a>
    </li>
  );
}

export default function SearchResults({ searchResults, onClick }) {
  return (
    <>
      <h2>검색결과</h2>
      { searchResults.length === 0
        ? <p>검색결과가 없습니다.</p>
        : (
          <ul>
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
          </ul>
        )}
    </>
  );
}
