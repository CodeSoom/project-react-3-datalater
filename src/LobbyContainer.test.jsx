import React from 'react';

import { MemoryRouter } from 'react-router-dom';

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

  function renderLobbyContainer() {
    return render((
      <MemoryRouter>
        <LobbyContainer />
      </MemoryRouter>
    ));
  }

  context('without players', () => {
    given('players', () => ([]));

    it('renders title', () => {
      const { container } = renderLobbyContainer();

      expect(container).toHaveTextContent('출발지점을 입력하세요');
    });

    it('renders no players message', () => {
      const { container } = renderLobbyContainer();

      expect(container).toHaveTextContent('참여 인원이 없습니다');
    });
  });

  context('with players', () => {
    const players = [
      { id: 0, name: 'A', selectedPlace: { name: '잠실역' } },
      { id: 1, name: 'B', selectedPlace: '' },
    ];

    given('players', () => players);

    it('renders players', () => {
      const { container } = renderLobbyContainer();

      players.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });

    it('renders "찾기" button with a link to search page for players who didn\'t select a place yet', () => {
      const { container, queryByText } = renderLobbyContainer();

      expect(queryByText('찾기')).not.toBeNull();
      expect(container.innerHTML).toContain('<a href="');
    });

    it('renders button text of selected place name for players who selected a place', () => {
      const { container, queryByText } = renderLobbyContainer();

      expect(queryByText('잠실역')).not.toBeNull();
      expect(container.innerHTML).toContain('<a href="');
    });
  });
});
