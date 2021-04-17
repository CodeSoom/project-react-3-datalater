import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import {
  selectMidpoint,
} from './slice';

import { colors } from './designSystem';

import { get, isEmptyArray } from './utils';

export default function MidpointContainer() {
  const dispatch = useDispatch();

  const midpoints = useSelector(get('midpoints'));

  const handleClick = useCallback((id) => {
    dispatch(selectMidpoint(id));
  }, [dispatch]);

  const Container = styled.div();

  const Header = styled.header({
    margin: '20px 0 20px 0',
    fontSize: '1.5em',
    fontWeight: 'bold',
  });

  const NoResultMessage = styled.p({
    textAlign: 'center',
    fontSize: '1.2em',
  });

  const List = styled.ul({
    listStyle: 'none',
    overflowY: 'auto',
    height: '30vh',
  });

  const Item = styled.li({
    borderBottom: `1px solid ${colors.gray}`,
    padding: '1em',
    fontSize: '1.2em',

    '&:hover': {
      cursor: 'pointer',
      borderLeft: `6px solid ${colors.secondary}`,
    },

    '& a': {
      textDecoration: 'none',
      color: colors.black,
    },
  });

  if (isEmptyArray(midpoints)) {
    return (
      <NoResultMessage>중간지점을 찾지 못했습니다.</NoResultMessage>
    );
  }

  return (
    <Container>
      <Header>추천 장소</Header>
      <List>
        { midpoints.map(({ id, name, address }) => (
          <Item
            key={id}
            onClick={() => handleClick(id)}
          >
            <div>
              {name}
            </div>
            <div>
              {address}
            </div>
          </Item>
        )) }
      </List>
    </Container>
  );
}
