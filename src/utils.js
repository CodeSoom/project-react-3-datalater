export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function isEmptyString(str) {
  return str === 'undefined' || str === '';
}

export function isEmptyArray(arr) {
  return arr === 'undefined' || arr.length === 0;
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
