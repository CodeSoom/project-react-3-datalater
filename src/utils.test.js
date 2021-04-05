import {
  get,
  equal,
} from './utils';

test('get', () => {
  const state = {
    name: '잠실역',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('잠실역');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});
