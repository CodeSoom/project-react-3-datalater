import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Button = styled.button({
  fontSize: '1.2em',
  padding: '.4em 1em',
  border: `1px solid ${colors.gray}`,
  borderRadius: '6px',
  color: colors.black,
  background: 'transparent',
  cursor: 'pointer',
  width: '100%',

  '&:hover': {
    borderColor: colors.secondary,
    borderWidth: '1px',
    boxShadow: `0 0 0 1px ${colors.secondary}`,
  },

  '& a': {
    textDecoration: 'none',
    color: colors.black,
  },
});

export default function SearchButton({
  onClickSearchButton,
  text = '찾기',
}) {
  return (
    <Button
      type="button"
      onClick={onClickSearchButton}
    >
      {text}
    </Button>
  );
}
