import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PlaceItem from './PlaceItem';

describe('PlaceItem', () => {
  const name = '잠실역 2호선';
  const address = '신천동 8';
  const x = 127;
  const y = 37;

  const handleClick = jest.fn();

  function renderPlaceItem() {
    return render((
      <PlaceItem
        key="0"
        name={name}
        address={address}
        x={x}
        y={y}
        onClick={handleClick}
      />
    ));
  }

  it('rennders place name and address', () => {
    const { container } = renderPlaceItem();

    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(address);
  });

  it('renders links to path /lobby', () => {
    const { container } = renderPlaceItem();

    expect(container.innerHTML).toContain('<a href="/lobby"');
  });

  it('selects item', () => {
    const { getByText } = renderPlaceItem();

    fireEvent.click(getByText(name));

    expect(handleClick).toBeCalledWith({
      name, address, x, y,
    });
  });
});
