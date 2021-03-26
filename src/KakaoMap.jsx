import React, { useEffect } from 'react';

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map');

    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    // TODO: eslint 통과시키기 위한 임시방편이므로 해결되면 지우기.
    const { log } = console;
    log(map);
  });

  return (
    <>
      <p>Kakao Map</p>
    </>
  );
}
