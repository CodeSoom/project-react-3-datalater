import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LobbyPage from './LobbyPage';

jest.mock('react-redux');

describe('LobbyPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      players: given.players,
      isEachAddressRegistered: given.isEachAddressRegistered,
    }));
  });

  function renderLobbyPage() {
    return render((
      <MemoryRouter>
        <LobbyPage />
      </MemoryRouter>
    ));
  }

  context('without players', () => {
    given('players', () => []);

    it('renders no players message', () => {
      const { container } = renderLobbyPage();

      expect(container).toHaveTextContent('참여 인원이 없습니다');
    });
  });

  context('with players', () => {
    const players = [
      { id: 0, name: 'A', selectedPlace: '' },
    ];

    given('players', () => players);

    it('renders players', () => {
      const { container } = renderLobbyPage();

      players.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });

    it('renders "찾기" button', () => {
      const { container, queryByText } = renderLobbyPage();

      expect(queryByText('찾기')).not.toBeNull();
      expect(container.innerHTML).toContain('<a href="');
    });

    context('without each address registered', () => {
      given('isEachAddressRegistered', () => false);

      it('renders midpoint button', () => {
        const { container } = renderLobbyPage();

        expect(container).toHaveTextContent('참여 인원의 주소가 모두 등록되지 않았습니다');
      });
    });

    context('with each address registered', () => {
      given('isEachAddressRegistered', () => true);

      it('renders midpoint button', () => {
        const { queryByText } = renderLobbyPage();

        expect(queryByText('중간지점 찾기')).not.toBeNull();
      });
    });
  });
});
