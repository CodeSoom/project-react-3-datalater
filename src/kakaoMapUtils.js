const isEmpty = (result) => (result === 'undefined')
  || ((result.documents || []).length === 0);

export function sliceResults(results, count) {
  if (isEmpty(results)) {
    return [];
  }

  return results.documents.slice(0, count);
}

export function addKeyByCopy(fromKey, toKey) {
  return (obj) => ({
    ...obj,
    [toKey]: obj[fromKey],
  });
}

function sumCoords(coords) {
  return coords.reduce((acc, { x, y }) => ({
    x: +x + acc.x,
    y: +y + acc.y,
  }), { x: 0, y: 0 });
}

export function getMidCoords(coords) {
  return {
    x: sumCoords(coords).x / coords.length,
    y: sumCoords(coords).y / coords.length,
  };
}
