const isEmpty = (result) => result === 'undefined'
  || (result.documents || []).length === 0;

export function refineResults(results) {
  if (isEmpty(results)) {
    return [];
  }

  return results.documents.slice(0, 5);
}

// TODO: delete this
export function xxx() {}
