import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const Label = styled.label({
  margin: '40px 0 20px 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
  display: 'block',
});

const Input = styled.input({
  flex: 3,
  fontSize: '1em',
  padding: '0.3em',
  marginRight: '10px',
});

const Button = styled.button({
  flex: 1,
  fontSize: '1em',
  width: '100%',
  padding: '0.3em',
  cursor: 'pointer',
  border: `1px solid ${colors.gray}`,
  borderRadius: '4px',
  background: `linear-gradient(${colors.darkBlue}, ${colors.lightBlue})`,
  color: colors.white,

  '&:hover': {
    opacity: 0.95,
  },

  '&:active': {
    opacity: 1,
  },
});

export default function TextField({
  label, type, name, value, onChange, onSubmit,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Wrapper>
        <Input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <Button
          type="button"
          onClick={onSubmit}
        >
          검색
        </Button>
      </Wrapper>
    </div>
  );
}
