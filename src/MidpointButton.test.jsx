import React from 'react';

import { render } from '@testing-library/react';

import MidpointButton from './MidpointButton';

describe('MidpointButton', () => {
  it('renders "중간지점 찾기" button', () => {
    const { queryByText } = render(<MidpointButton />);

    expect(queryByText('중간지점 찾기')).not.toBeNull();
  });
});
