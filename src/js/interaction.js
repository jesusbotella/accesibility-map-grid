export function clickOnElement (mapCanvas, elementId) {
  const element = document.querySelector(`[data-element-position="${elementId}"]`);
  const elementBoundingBox = element.getBoundingClientRect();
  const elementCenter = getElementCenter(elementBoundingBox);

  simulateEvent(mapCanvas, elementCenter);
}

function getElementCenter(boundingBox) {
  return {
    x: boundingBox.left + (boundingBox.width / 2),
    y: boundingBox.top + (boundingBox.height / 2)
  };
}

function simulateEvent(mapCanvas, eventPosition) {
  const event = new MouseEvent('dblclick', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  const pageXGetter = { get: () => eventPosition.x };
  const pageYGetter = { get: () => eventPosition.y };

  Object.defineProperties(event, {
    clientX: pageXGetter,
    pageX: pageXGetter,
    layerX: pageXGetter,
    offsetX: pageXGetter,
    screenX: pageXGetter,
    x: pageXGetter,
    clientY: pageYGetter,
    layerY: pageYGetter,
    offsetY: pageYGetter,
    screenY: pageYGetter,
    y: pageYGetter,
    pageY: pageYGetter
  });

  mapCanvas.dispatchEvent(event);
}
