import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { HiArrowNarrowLeft } from 'react-icons/hi';

import { colors } from './designSystem';

export default function BackButtonHeader() {
  const history = useHistory();

  const handleClickBack = useCallback(() => {
    const url = '/lobby';
    history.push(url);
  });

  const Header = styled.div({
    width: '100%',
    padding: '0.6em 0',
    borderBottom: `1px solid ${colors.gray}`,
  });

  const BackButton = styled.button({
    margin: '0 20px',

    display: 'flex',
    alignItems: 'center',

    background: 'transparent',
    cursor: 'pointer',
    width: '100%',
    border: 'none',

    fontSize: '1.2em',
    fontWeight: 'bold',
  });

  return (
    <Header>
      <BackButton
        onClick={handleClickBack}
        aria-label="back"
      >
        <HiArrowNarrowLeft />
      </BackButton>
    </Header>
  );
}
