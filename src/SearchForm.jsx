import React from 'react';

import TextField from './TextField';

export default function SearchForm({ fields, onChange, onSubmit }) {
  const { query } = fields;

  return (
    <>
      <TextField
        label="주소 입력"
        type="text"
        name="query"
        value={query}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        검색
      </button>
    </>
  );
}
