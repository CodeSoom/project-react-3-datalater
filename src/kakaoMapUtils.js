const isEmpty = (result) => (result === 'undefined')
  || ((result.documents || []).length === 0);

export default function sliceResults(results, count) {
  if (isEmpty(results)) {
    return [];
  }

  return results.documents.slice(0, count);
}
