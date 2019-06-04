import initSpeechRecognition from './speech-recognition/speech-recognition.js';
import * as commandHandlers from './speech-recognition/command-handlers.js';

const annyangCommands = {
  'zoom out': function () {
    commandHandlers.onZoomOut.apply(this, arguments)
  },
  'show me the numbers': function () {
    commandHandlers.onShowGridCommandRecognized.apply(this, arguments);
  },
  '*number': function () {
    commandHandlers.onNumberRecognized.apply(this, arguments);
  }
};

initSpeechRecognition(annyangCommands);
