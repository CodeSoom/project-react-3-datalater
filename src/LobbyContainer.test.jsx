import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LobbyContainer from './LobbyContainer';

jest.mock('react-redux');

describe('LobbyContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      players: given.players,
    }));
  });

  context('without players', () => {
    given('players', () => ([]));

    it('renders title', () => {
      const { container } = render(<LobbyContainer />);

      expect(container).toHaveTextContent('출발지점을 입력하세요');
    });

    it('renders no players message', () => {
      const { container } = render(<LobbyContainer />);

      expect(container).toHaveTextContent('참여 인원이 없습니다');
    });
  });

  context('with players', () => {
    const players = [
      { id: 0, name: 'A', address: '' },
      { id: 1, name: 'B', address: '' },
    ];

    given('players', () => players);

    it('renders players', () => {
      const { container, queryAllByText } = render(<LobbyContainer />);

      players.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });

      expect(queryAllByText('찾기')).not.toBeNull();
    });
  });
});
