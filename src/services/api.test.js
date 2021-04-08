import {
  postKeywordSearch,
  postCategorySearch,
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

  describe('postCategorySearch', () => {
    beforeEach(() => {
      mockFetch({ documents: [] });
    });

    it('returns search results', async () => {
      const results = await postCategorySearch({ x: 127, y: 36 });

      expect(results).toEqual(SEARCH_RESULTS);
    });
  });
});
