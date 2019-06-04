import map from '../map.js';
import { clickOnElement } from '../interaction.js';

const mapCanvas = document.querySelector('.mapboxgl-canvas-container');
const grid = document.querySelector('.grid');
const explanation = document.querySelector('.explanation');

export function onZoomOut() {
  const zoom = map.getZoom() - 1;
  map.jumpTo({ zoom });
}

export function onShowGridCommandRecognized() {
  grid.classList.add('grid--active');
  explanation.classList.add('explanation--hidden');
}

export function onNumberRecognized(number) {
  const parsedNumber = parseFloat(number);

  if (isNaN(parsedNumber)) {
      return;
  }

  clickOnElement(mapCanvas, parsedNumber);
}
