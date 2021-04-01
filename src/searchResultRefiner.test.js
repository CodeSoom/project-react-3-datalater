import { refineResults } from './searchResultRefiner';

describe('refineResults', () => {
  context('with empty raw results', () => {
    const rawResults = {};

    it('returns empty array', () => {
      const results = refineResults(rawResults);

      expect(results).toHaveLength(0);
    });
  });

  context('with raw results', () => {
    const rawResults = {
      documents: [
        { id: 0, name: '잠실역 1번 출구' },
        { id: 1, name: '잠실역 2번 출구' },
        { id: 2, name: '잠실역 3번 출구' },
        { id: 3, name: '잠실역 4번 출구' },
        { id: 4, name: '잠실역 5번 출구' },
        { id: 5, name: '잠실역 6번 출구' },
      ],
    };

    it('returns array of maximum five elements', () => {
      const results = refineResults(rawResults);

      expect(results).toHaveLength(5);
    });
  });
});
