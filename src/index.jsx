import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    <h1>Where do we meet?</h1>
    <p>다음 지도를 통해 알아보세요.</p>
    <ul>
      <li><a href="https://map.kakao.com/">카카오 지도</a></li>
      <li><a href="https://map.naver.com/">네이버 지도</a></li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById('app'));
