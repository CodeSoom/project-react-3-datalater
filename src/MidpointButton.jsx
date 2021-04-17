import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Button = styled.button(({ isEachAddressRegistered }) => ({
  fontSize: '1.2em',
  width: '100%',
  padding: '1em',
  cursor: 'pointer',
  border: `1px solid ${colors.gray}`,
  borderRadius: '2rem',
  background: isEachAddressRegistered
    ? `linear-gradient(${colors.darkBlue}, ${colors.lightBlue})`
    : 'default',
  color: isEachAddressRegistered ? colors.white : 'default',

  '&:hover': {
    opacity: 0.95,
  },

  '&:active': {
    opacity: 1,
  },
}));

function MidpointButton({ isEachAddressRegistered, onClick }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={!isEachAddressRegistered}
      isEachAddressRegistered={isEachAddressRegistered}
    >
      {isEachAddressRegistered
        ? '중간지점 찾기'
        : '출발지점을 모두 입력해주세요'}
    </Button>
  );
}

export default React.memo(MidpointButton);
