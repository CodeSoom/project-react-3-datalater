import {
  postKeywordSearch,
  xxx,
} from './api';

import SEARCH_RESULTS from '../../fixtures/search-results';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('postKeywordSearch', () => {
    beforeEach(() => {
      mockFetch({ documents: [] });
    });

    it('return search results', async () => {
      const results = await postKeywordSearch('잠실역');

      expect(results).toEqual(SEARCH_RESULTS);
    });
  });

  // TODO: delete this
  describe('not yet written function', () => {
    it('returns null', () => {
      const results = xxx();

      expect(results).toBeNull();
    });
  });
});
