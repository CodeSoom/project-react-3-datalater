import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LobbyContainer from './LobbyContainer';

jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('LobbyContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      players: given.players,
      isEachAddressRegistered: given.isEachAddressRegistered,
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
      const { queryByText, getByText } = renderLobbyContainer();

      expect(queryByText('찾기')).not.toBeNull();

      fireEvent.click(getByText('찾기'));

      expect(mockPush).toBeCalledWith('/search/1');
    });

    it('renders button text of selected place name for players who selected a place', () => {
      const { queryByText } = renderLobbyContainer();

      expect(queryByText('잠실역')).not.toBeNull();
    });

    context('without each address registered', () => {
      given('isEachAddressRegistered', () => false);

      it('renders not every address registered message', () => {
        const { container } = renderLobbyContainer();

        expect(container).toHaveTextContent('참여 인원의 주소가 모두 등록되지 않았습니다');
      });
    });

    context('with each address registered', () => {
      given('isEachAddressRegistered', () => true);

      it('renders midpoint button', () => {
        const { queryByText, getByText } = renderLobbyContainer();

        expect(queryByText('중간지점 찾기')).not.toBeNull();

        fireEvent.click(getByText('중간지점 찾기'));

        expect(dispatch).toBeCalled();
        expect(mockPush).toBeCalledWith('/result');
      });
    });
  });
});
