import {
  sliceResults,
  addKeyByCopy,
} from '../kakaoMapUtils';

const RESULT_COUNT = 5;
const SUBWAY_CODE = 'SW8';
const RADIUS_METER = '20000';

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

  return sliceResults(results, RESULT_COUNT)
    .map(addKeyByCopy('place_name', 'name'))
    .map(addKeyByCopy('address_name', 'address'));
}

export async function postCategorySearch({ x, y }) {
  const url = 'https://dapi.kakao.com/v2/local/search/category.json'
  + `?category_group_code=${SUBWAY_CODE}`
  + `&radius=${RADIUS_METER}`
  + `&x=${x}`
  + `&y=${y}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${process.env.REST_API_KEY}`,
    },
  });

  const results = await response.json();

  return sliceResults(results, RESULT_COUNT)
    .map(addKeyByCopy('place_name', 'name'))
    .map(addKeyByCopy('address_name', 'address'));
}
