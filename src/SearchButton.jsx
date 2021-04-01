import React from 'react';

import { Link } from 'react-router-dom';

export default function SearchButton({ id }) {
  const url = `/search/${id}`;

  return (
    <button type="button">
      <Link to={url}>
        찾기
      </Link>
    </button>
  );
}
