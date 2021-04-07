import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MidpointContainer from './MidpointContainer';

jest.mock('react-redux');

describe('MidpointContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      isEachAddressRegistered: given.isEachAddressRegistered,
    }));
  });

  function renderLobbyContainer() {
    return render((
      <MemoryRouter>
        <MidpointContainer />
      </MemoryRouter>
    ));
  }

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
      const { queryByText } = renderLobbyContainer();

      expect(queryByText('중간지점 찾기')).not.toBeNull();
    });
  });
});
