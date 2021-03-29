import React from 'react';

import TextField from './TextField';

export default function SearchForm({ fields, onChange, onSubmit }) {
  const { place } = fields;

  return (
    <>
      <TextField
        label="출발지점"
        type="text"
        name="place"
        value={place}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        추가
      </button>
    </>
  );
}
