export function setCenter(latitude, longitude) {
  return new window.kakao.maps.LatLng(latitude, longitude);
}

export function setMap(container, options) {
  return new window.kakao.maps.Map(container, options);
}
