import React from 'react';

import TextField from './TextField';

export default function SearchForm({ fields, onChange, onSubmit }) {
  const { query } = fields;

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="주소 입력"
        type="text"
        name="query"
        value={query}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </form>
  );
}
