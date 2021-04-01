import { refineResults } from '../searchResultRefiner';

export async function postSearch(query) {
  const url = 'https://dapi.kakao.com/v2/local/search/keyword.json'
  + `?query=${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${process.env.REST_API_KEY}`,
    },
  });

  const results = await response.json();

  return refineResults(results);
}

// TODO: delete this
export function xxx() {

}
