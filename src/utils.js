export function get(key) {
  return (obj) => obj[key];
}

export function isEmptyString(str) {
  return str === 'undefined' || str === '';
}

export function isEmptyArray(arr) {
  return arr === 'undefined' || arr.length === 0;
}
