import React from 'react';

import styled from '@emotion/styled';

import { AiOutlineSearch } from 'react-icons/ai';

import { breakpoints, colors } from './designSystem';

const Contaienr = styled.div({
  position: 'relative',
});

const Label = styled.label({
  margin: '40px 0 20px 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
  display: 'block',
});

const Input = styled.input({
  flex: 4,
  fontSize: '1.2em',
  padding: '0.3em calc(0.3em + 20px)',
  border: 'none',
  borderBottom: `1px solid ${colors.gray}`,
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',

  [breakpoints.minDesktop]: {
    width: '100%',
    position: 'static',
    margin: 0,
  },
});

const Button = styled.button({
  position: 'absolute',
  right: '0',

  flex: 1,
  fontSize: '1.2em',

  padding: '0.3em',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  color: colors.black,

  '&:hover': {
    opacity: 0.95,
  },

  '&:active': {
    opacity: 1,
  },
});

export default function TextField({
  label, type, name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <Contaienr>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder="주소 또는 장소명을 입력하세요"
      />
      <Button
        aria-label="search"
        onClick={onsubmit}
      >
        <AiOutlineSearch />
      </Button>
    </Contaienr>
  );
}
