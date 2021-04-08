import {
  sliceResults,
  getMidCoords,
  addKeyByCopy,
} from './kakaoMapUtils';

describe('sliceResults', () => {
  context('with empty raw results', () => {
    const rawResults = {};

    it('returns empty array', () => {
      const results = sliceResults(rawResults);

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

    it('returns array with the specific number of items', () => {
      const count = 5;

      const results = sliceResults(rawResults, count);

      expect(results).toHaveLength(5);
    });
  });
});

describe('getMidCoords', () => {
  it('returns intermediate coords', () => {
    const places = [
      { x: 10, y: 20 },
      { x: 10, y: 20 },
      { x: 40, y: 50 },
    ];

    const result = getMidCoords(places);

    expect(result).toEqual({ x: 20, y: 30 });
  });
});

describe('addKeyByCopy', () => {
  it('returns array of objects with added key', () => {
    const documents = [
      {
        id: 0, address_name: '복정역 주소', place_name: '복정역', x: 127, y: 37,
      },
    ];

    const newDocuments = documents
      .map(addKeyByCopy('place_name', 'name'))
      .map(addKeyByCopy('address_name', 'address'));

    newDocuments.forEach((document) => {
      expect(document.name).not.toBeUndefined();
      expect(document.address).not.toBeUndefined();
    });
  });
});
