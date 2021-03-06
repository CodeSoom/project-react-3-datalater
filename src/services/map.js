import { isEmptyObject } from '../utils';

const DEFAULT_X = 33.450701;
const DEFAULT_Y = 126.570667;

export function getPosition(latitude, longitude) {
  return new window.kakao.maps.LatLng(latitude, longitude);
}

export function createMap(container, options) {
  return new window.kakao.maps.Map(container, options);
}

function createMarker({
  map, position, title, image = null,
}) {
  return new window.kakao.maps.Marker({
    map,
    position,
    title,
    image,
  });
}

export function loadMap({ selectedPlaces, midpoints, selectedMidpoint }) {
  window.kakao.maps.load(() => {
    const container = document.getElementById('map');

    const options = {
      center: getPosition(DEFAULT_X, DEFAULT_Y),
      level: 3,
    };

    const map = createMap(container, options);

    const bounds = new window.kakao.maps.LatLngBounds();

    selectedPlaces.forEach(({ name, x, y }) => {
      const position = getPosition(+y, +x);

      createMarker({
        map,
        position,
        title: name,
      });

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: getPosition(+y - 0.001, +x),
        content: `<div id="selectedplace">${name}</div>`,
      });

      customOverlay.setMap(map);

      bounds.extend(position);
    });

    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    if (isEmptyObject(selectedMidpoint)) {
      midpoints.forEach(({ name, x, y }) => {
        const position = new window.kakao.maps.LatLng(+y, +x);

        createMarker({
          map,
          position,
          title: name,
          image: markerImage,
        });

        bounds.extend(position);
      });
    } else {
      const { name, x, y } = selectedMidpoint;

      const position = new window.kakao.maps.LatLng(+y, +x);

      createMarker({
        map,
        position,
        title: name,
        image: markerImage,
      });

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: getPosition(+y - 0.001, +x),
        content: `<div id="selectedplace">${name}</div>`,
      });

      customOverlay.setMap(map);

      bounds.extend(position);
    }

    map.setBounds(bounds);
  });
}
