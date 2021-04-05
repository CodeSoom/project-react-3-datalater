import React from 'react';

import { Link } from 'react-router-dom';

export default function SearchButton({ id, text = '찾기' }) {
  const url = `/search/${id}`;

  return (
    <button type="button">
      <Link to={url}>
        {text}
      </Link>
    </button>
  );
}
