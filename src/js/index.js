import './map.js';
import { clickOnElement } from './interaction.js';
import initSpeechRecognition from './speech-recognition.js';

const mapCanvas = document.querySelector('.mapboxgl-canvas-container');
const grid = document.querySelector('.grid');
const explanation = document.querySelector('.explanation');

function onShowGridCommandRecognized() {
  grid.classList.add('grid--active');
  explanation.classList.add('explanation--hidden');
}

function onNumberRecognized(number) {
  const parsedNumber = parseFloat(number);

  if (isNaN(parsedNumber)) {
    return;
  }

  clickOnElement(mapCanvas, parsedNumber);
}

const annyangCommands = {
  'show me the numbers': function () {
    onShowGridCommandRecognized.apply(this, arguments);
  },
  '*number': function () {
    onNumberRecognized.apply(this, arguments);
  }
};

initSpeechRecognition(annyangCommands);
