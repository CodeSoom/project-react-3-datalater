import { get } from './utils';

test('get', () => {
  const state = {
    name: '잠실역',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('잠실역');
  expect(g(state)).toBeUndefined();
});
