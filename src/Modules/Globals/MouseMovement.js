/*
  Class description:
    Detect and store mouse and touch movement
    Detect and store changes to the viewport dimensions

    The movement values are stored on an event basis
    To use these values in a performant style, setInterval is used, movement values are
    accumulated between each interval and are used and then reset in each interval.
*/

export class MouseMovement {
  constructor() {
    this.mouseEnabled = false;
    this.touchEnabled = false;
    this.movementX = 0;
    this.movementY = 0;
    this.touchMovementX = 0;
    this.touchMovementY = 0;
    this.initialiseEventListeners();
    setInterval(this.initialiseEventListeners.bind(this), 250);
  }

  initialiseEventListeners() {
    if (matchMedia('(pointer:fine)').matches && this.mouseEnabled === false) {
      this.mouseEnabled = true;
      this.touchEnabled = false;
      this.updateEventListeners();
    } else if (
      matchMedia('(pointer:coarse)').matches &&
      this.touchEnabled === false
    ) {
      this.touchEnabled = true;
      this.mouseEnabled = false;
      this.updateEventListeners();
    }
  }

  updateEventListeners() {
    if (this.mouseEnabled === true) {
      /* Initialise if mouse is active */
      window.removeEventListener('touchmove', this.touchMove.bind(this));
      window.addEventListener('mousemove', this.mouseMove.bind(this));
    } else if (this.touchEnabled === true) {
      /* Initialise if touch is active */
      window.removeEventListener('mousemove', this.mouseMove.bind(this));
      window.addEventListener('touchmove', this.touchMove.bind(this));
    }
    this.movementX = 0;
    this.movementY = 0;
  }

  mouseMove(event) {
    // Track and Store realtime values for Mouse movement
    this.movementX += event.movementX;
    this.movementY += event.movementY;
  }

  touchMove(event) {
    /* Initialize if touch is active */
    this.touchX = event.touches[0].clientX;
    this.touchY = event.touches[0].clientY;
  }
}
