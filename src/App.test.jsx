import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  // TODO: 아래 kakao 객체를 한 번에 모킹하고 싶은데 어떻게 해야 하는지 모르겠다
  global.kakao = jest.fn();
  global.kakao.maps = jest.fn();
  global.kakao.maps.LatLng = jest.fn();
  global.kakao.maps.Map = jest.fn();

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Where do we meet?');
  });

  it('renders map', () => {
    render(<App />);

    expect(global.kakao.maps.Map).toHaveBeenCalled();
  });
});
