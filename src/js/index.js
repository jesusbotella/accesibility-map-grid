import './map.js';
import { clickOnElement } from './interaction.js';
import initSpeechRecognition from './speech-recognition.js';

const mapCanvas = document.querySelector('.mapboxgl-canvas-container');

function onCommandRecognized (number) {
  const parsedNumber = parseFloat(number);

  if (isNaN(parsedNumber)) {
    return;
  }

  clickOnElement(mapCanvas, parsedNumber);
}

initSpeechRecognition(onCommandRecognized);
