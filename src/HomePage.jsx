import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Container = styled.div({
  height: '100%',
  margin: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Title = styled.header({
  margin: '40px 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
});

const Button = styled.button({
  margin: '40px 0',

  fontSize: '1.2em',
  width: '100%',
  padding: '1em',
  cursor: 'pointer',
  border: `1px solid ${colors.gray}`,
  borderRadius: '2rem',
  background: `linear-gradient(${colors.darkBlue}, ${colors.lightBlue})`,
  color: colors.white,

  '&:hover': {
    opacity: 0.95,
  },

  '&:active': {
    opacity: 1,
  },
});

export default function HomePage() {
  const history = useHistory();

  const handleClick = useCallback(() => {
    const url = '/lobby';
    history.push(url);
  });

  return (
    <Container>
      <Title>
        <h2>
          친구와
          <br />
          어디서 만나면 좋을지
          <br />
          중간지점을 알려드립니다.
        </h2>
      </Title>
      <Button
        type="button"
        onClick={handleClick}
      >
        START
      </Button>
    </Container>
  );
}
