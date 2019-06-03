annyang.debug(true);

export default function speechRecognition (onCommandRecognized) {
  const annyangCommands = {
    '*number': function () {
      onCommandRecognized.apply(this, arguments);
      annyang.resume();
    }
  };

  // Add our commands to annyang
  annyang.addCommands(annyangCommands);

  // Start listening.
  annyang.start();
}

