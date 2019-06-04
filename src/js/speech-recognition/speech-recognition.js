annyang.debug(true);

export default function speechRecognition (commands) {
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

