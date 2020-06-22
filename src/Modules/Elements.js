import { MouseMovement } from './Globals/MouseMovement';
import { Element } from './Element';

export class Elements {
  constructor() {
    this.elements = [];
    this.mouseMovement = new MouseMovement();
    this.listen();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  /*
    # create

    1. Create a new element class using user input + a reference to the mousemovement class
    2. Store it inside of this.elements array
    3. Return the element's reference so it can be stored inside of a variable when calling this function
  */

  create(selector, aniObject) {
    const newElement = new Element(selector, aniObject, this.mouseMovement);
    this.elements.push(newElement);
    this.setDragSpeeds();
    return newElement;
  }

  /*
    # startTouchDrag

    - Store initial touch position
    - Store initial movement
  */

  startTouchDrag() {
    if (this.mouseMovement.touchEnabled) {
      this.mouseMovement.touchX = event.touches[0].clientX;
      this.mouseMovement.touchY = event.touches[0].clientY;
      this.mouseMovement.initialTouchY = event.touches[0].clientY;
      this.mouseMovement.initialTouchX = event.touches[0].clientX;
      this.mouseMovement.prevMovementX = 0;
      this.mouseMovement.prevMovementY = 0;
    }
    this.startDrag();
  }

  /*
      # startDrag

      Triggered on mouse down.
      - Clear leftover animation interval's and values before starting up the drag interval
    */

  startDrag() {
    this.mouseMovement.movementX = 0;
    this.mouseMovement.movementY = 0;
    this.elements.forEach((val) => {
      for (const key in val.transforms) {
        clearInterval(val.transforms[key].easeIntervalID);
      }
    });

    // Use 20ms for smooth & performant animation
    this.dragIntervalID = setInterval(this.dragInterval.bind(this), 16.7);
  }

  /*
      # stopDrag

      Triggered on mouse up.
      - Remove the drag interval
      - Start up ease out animations for each Element Class
    */

  stopDrag() {
    if (!this.dragIntervalID) {
      return;
    }
    clearInterval(this.dragIntervalID);
    this.elements.forEach((val) => {
      val.easeAnimation();
    });
  }

  /*
      # dragInterval

      - Executes at an interval when either mousedown or touchstart is triggered.
      - Stops when mouseup or touchend is triggered.

      Calls drag functions (updates transform values based on mouse movement) inside of each Element Class

      Mouse movement:
      - The MouseMovement class is passed as a reference to each Element class
      - Movement values are cleared after each drag function has finished updating the
        class and DOM values, and will be re-accumulated for the next execution.
    */

  dragInterval() {
    if (this.mouseMovement.touchEnabled === true) {
      this.calculateTouchMovement();
    }

    // Max speed
    this.mouseMovement.movementX =
      this.mouseMovement.movementX > 50 ? 50 : this.mouseMovement.movementX;
    this.mouseMovement.movementX =
      this.mouseMovement.movementX < -50 ? -50 : this.mouseMovement.movementX;
    this.mouseMovement.movementY =
      this.mouseMovement.movementY > 50 ? 50 : this.mouseMovement.movementY;
    this.mouseMovement.movementY =
      this.mouseMovement.movementY < -50 ? -50 : this.mouseMovement.movementY;

    // Execute drag function for each element
    this.elements.forEach((val) => {
      val.drag();
    });

    // Set seperate variable lastMovement to prevent a movement value of 0 in the ease out animation
    this.mouseMovement.lastMovementX = this.mouseMovement.movementX;
    this.mouseMovement.lastMovementY = this.mouseMovement.movementY;

    this.mouseMovement.movementX = 0;
    this.mouseMovement.movementY = 0;
  }

  /*
    # calculateTouchMovement

    Calculate touch movement since last interval execution
  */

  calculateTouchMovement() {
    this.mouseMovement.currentMovementX =
      this.mouseMovement.touchX - this.mouseMovement.initialTouchX;
    this.mouseMovement.movementX =
      this.mouseMovement.currentMovementX - this.mouseMovement.prevMovementX;
    this.mouseMovement.prevMovementX = this.mouseMovement.currentMovementX;

    this.mouseMovement.currentMovementY =
      this.mouseMovement.touchY - this.mouseMovement.initialTouchY;
    this.mouseMovement.movementY =
      this.mouseMovement.currentMovementY - this.mouseMovement.prevMovementY;
    this.mouseMovement.prevMovementY = this.mouseMovement.currentMovementY;
  }

  /*
    # setDragSpeeds

    Called whenever an element is added or the viewport size is changed
    -------------
    Updates the drag speed of each element based on
    it's initial input value and the viewport
  */

  setDragSpeeds() {
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;

    // Set dragspeed of each element based on the viewport dimensions
    this.elements.forEach((val) => {
      for (const key in val.transforms) {
        val.transforms[key].dragSpeed =
          val.transforms[key].dragSpeedInput / (this.vw / 500 + 2.5);
      }
    });
  }

  /*
    # onResize

    - Detect and store changes to the viewport dimensions
    - Update drag speed values for each element
  */

  onResize() {
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;
    // Set dragspeed of each element based on the viewport dimensions

    this.elements.forEach((val) => {
      for (const key in val.transforms) {
        // Define drag speed based on touch or mouse device
        val.transforms[key].dragSpeed =
          val.transforms[key].dragSpeedInput / (this.vw / 500 + 2.5);
      }
    });
  }

  /*
    #listen

    Initializes:
    - Dragging functionality on mousedown
    - Ease out functionality on mouseup
  */

  listen() {
    window.addEventListener('mousedown', this.startDrag.bind(this));
    window.addEventListener('mouseup', this.stopDrag.bind(this));
    window.addEventListener('touchstart', this.startTouchDrag.bind(this));
    window.addEventListener('touchend', this.stopDrag.bind(this));
  }
}
