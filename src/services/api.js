import sliceResults from '../kakaoMapUtils';

const RESULT_COUNT = 5;

export async function postKeywordSearch(query) {
  const url = 'https://dapi.kakao.com/v2/local/search/keyword.json'
  + `?query=${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${process.env.REST_API_KEY}`,
    },
  });

  const results = await response.json();

  return sliceResults(results, RESULT_COUNT);
}

// TODO: delete this
export function xxx() {
  return null;
}
