import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders label and input control', () => {
    const { queryByLabelText } = render((
      <TextField
        label="출발지점"
        type="text"
        name="place"
        value=""
        onChange={handleChange}
      />
    ));

    expect(queryByLabelText('출발지점')).not.toBeNull();
  });

  it('renders value', () => {
    const name = 'place';
    const value = '잠실역';

    const { getByLabelText } = render((
      <TextField
        label="출발지점"
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('출발지점').value).toBe('잠실역');
  });

  it('listens to the change events', () => {
    const name = 'place';
    const value = '잠실역';

    const { getByLabelText } = render((
      <TextField
        label="출발지점"
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('출발지점'), {
      target: { value: '복정역' },
    });

    expect(handleChange).toBeCalledWith({ name: 'place', value: '복정역' });
  });
});
