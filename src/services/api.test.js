import {
  postSearch,
} from './api';

import SEARCH_RESULTS from '../../fixtures/search-results';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('postSearch', () => {
    beforeEach(() => {
      mockFetch({ documents: [] });
    });

    it('return search results', async () => {
      const results = await postSearch('잠실역');

      expect(results).toEqual(SEARCH_RESULTS);
    });
  });
});
