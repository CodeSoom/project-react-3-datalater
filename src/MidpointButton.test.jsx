import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MidpointButton from './MidpointButton';

describe('MidpointButton', () => {
  const handleClick = jest.fn();

  function renderMidpointButton(isEachAddressRegistered) {
    return render((
      <MidpointButton
        isEachAddressRegistered={isEachAddressRegistered}
        onClick={handleClick}
      />
    ));
  }

  context('with each address registered', () => {
    const isEachAddressRegistered = true;

    it('renders "중간지점 찾기" button', () => {
      const { queryByText, getByText } = renderMidpointButton(isEachAddressRegistered);

      expect(queryByText('중간지점 찾기')).not.toBeNull();

      fireEvent.click(getByText('중간지점 찾기'));

      expect(handleClick).toBeCalled();
    });
  });

  context('without each address registered', () => {
    const isEachAddressRegistered = false;

    it('renders "중간지점 찾기" button', () => {
      const { container } = renderMidpointButton(isEachAddressRegistered);

      expect(container).toHaveTextContent('참여 인원의 주소가 모두 등록되지 않았습니다');
    });
  });
});
