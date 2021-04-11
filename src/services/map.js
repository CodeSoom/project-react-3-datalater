export function setCenter(latitude, longitude) {
  return new window.kakao.maps.LatLng(latitude, longitude);
}

export function createMap(container, options) {
  return new window.kakao.maps.Map(container, options);
}

export function loadMap() {
  return window.kakao.maps.load(() => {
    const container = document.getElementById('map');

    const options = {
      center: setCenter(33.450701, 126.570667),
      level: 3,
    };

    createMap(container, options);
  });
}
