/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Modules/AnimationObject.js":
/*!****************************************!*\
  !*** ./src/Modules/AnimationObject.js ***!
  \****************************************/
/*! exports provided: AnimationObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationObject", function() { return AnimationObject; });
/*
      Class description:
      Uses logic that incorporates the user input to
      generate an object which holds all the
      object related properties and values.
    */
class AnimationObject {
  constructor(animationObject) {
    this.create(animationObject);
  }
  /*
    # create
      Top level function which
    controls and combines results of several other internal functions
    */


  create(animationObject) {
    animationObject.forEach(userInput => {
      const dragDirection = this.setDirection(userInput.transform);
      this.createAnimationObject(userInput, dragDirection);
    });
  }
  /* 
    # setDirection
      Helper function to determine the allowed directions that the object will use to transform
  */


  setDirection(transformType) {
    switch (transformType) {
      case 'rotateY':
      case 'translateX':
      case 'rotateZ':
        return 'horizontal';
        break;

      case 'rotateX':
      case 'translateY':
      case 'translateZ':
        return 'vertical';
        break;
      // case 'rotateZ':
      // case 'translateZ':
      //   return 'both';
      //   break;

      default:
        return false;
    }
  }
  /*
    # createAnimationObject
      Use default values combined with
    user input to generate the object which is 
    better specified in the class description.
  */


  createAnimationObject(userInput, dragDirection) {
    const defaultAnimationValues = {
      dragSpeed: 1,
      initalValue: 0,
      easeSpeed: 1,
      easeDuration: 200,
      maxDragSpeed: 60
    };
    this[userInput.transform] = {};
    this[userInput.transform].active = true;
    this[userInput.transform].dragSpeedInput = userInput.dragSpeed || defaultAnimationValues.dragSpeed;
    this[userInput.transform].dragSpeed = userInput.dragSpeed || defaultAnimationValues.dragSpeed;
    this[userInput.transform].easeValue = userInput.initialValue || 0;
    this[userInput.transform].dragValue = userInput.initialValue || 0;
    this[userInput.transform].easeSpeed = userInput.easeSpeed || defaultAnimationValues.easeSpeed;
    this[userInput.transform].easeDuration = userInput.easeDuration || defaultAnimationValues.easeDuration;
    this[userInput.transform].dragDirection = dragDirection || 'both';
    this[userInput.transform].maxDragSpeed = userInput.dragSpeed * 110 || defaultAnimationValues.dragSpeed * 110;
  }

}

/***/ }),

/***/ "./src/Modules/Element.js":
/*!********************************!*\
  !*** ./src/Modules/Element.js ***!
  \********************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var _Globals_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals/HelperFunctions */ "./src/Modules/Globals/HelperFunctions.js");
/* harmony import */ var _AnimationObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationObject */ "./src/Modules/AnimationObject.js");
/*
  # Class description:
  Select and store the DOM elements based on querySelector
  Store and manipulate an instance of AnimationObject inside of element.transforms

  Uses static HelperFunctions to:
  - Update the DOM with the latest transform values
  - Calculate easing for the ease out animation
*/


class Element {
  constructor(selector, animationValues = false, mouseMovement) {
    this.elements = document.querySelectorAll(selector);
    this.mouseMovement = mouseMovement;
    this.easeRotation;
    this.transforms = new _AnimationObject__WEBPACK_IMPORTED_MODULE_1__["AnimationObject"](animationValues);
    _Globals_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["HelperFunctions"].transform(this.elements, this.transforms);
  }
  /*
    #drag
      Function is executed with interval timing
      Activated: on mousedown
    Deactivated: on mouseup
      1.  Uses the MouseMovement class to
        retrieve realtime movementX and movementY values
    2.  Calculates transform values by multiplying the
        movementX and/or movementY values with a user inputted speed multiplier
    3.  Uses the HelperFunctions class to update the DOM elements with the 
        newly calculated values.
  */


  drag(direction = true) {
    // Loop through all transformations inputted into this element
    for (const key in this.transforms) {
      // if statement only for demo purpose
      if (this.transforms[key].active === false) {
        continue;
      }

      let movement;

      switch (this.transforms[key].dragDirection) {
        case 'horizontal':
          movement = Math.trunc(this.mouseMovement.movementX * this.transforms[key].dragSpeed);
          break;

        case 'vertical':
          movement = Math.trunc(this.mouseMovement.movementY * this.transforms[key].dragSpeed);
          break;

        default:
          movement = Math.trunc((this.mouseMovement.movementX + this.mouseMovement.movementY) * this.transforms[key].dragSpeed);
      } // Update dragValue


      this.transforms[key].dragValue += movement || 0;
    } // Update the DOM elements based on the newly generated transform properties


    _Globals_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["HelperFunctions"].transform(this.elements, this.transforms);
  }
  /*
    #easeAnimation
      Activates at mouse up, when the drag function ends
    Sets an ease animation relative to drag speed and the latest stored mouse movement values
  */


  easeAnimation() {
    // Loop through all transformations inputted into this element
    for (const key in this.transforms) {
      // if statement only for demo purpose
      if (this.transforms[key].active === false) {
        continue;
      } // Copy the latest updated transformation value


      this.transforms[key].easeValue = this.transforms[key].dragValue; // Create a new multiplier based on the drag speed (to keep the ease speed relative to the drag speed)

      const multiplier = this.transforms[key].dragSpeed * 45;
      let transformAmount; // Deduct which mouse direction(s) are set to the animation object
      // Use that deduction to multiply the movementX and/or movementY values
      // Stores the calculated amount to transform inside of the variable transformAmount

      if (this.transforms[key].dragDirection === 'horizontal') {
        transformAmount = this.mouseMovement.lastMovementX * multiplier;
      } else if (this.transforms[key].dragDirection === 'vertical') {
        transformAmount = this.mouseMovement.lastMovementY * multiplier;
      } else if (this.transforms[key].dragDirection === 'both') {
        transformAmount = (this.mouseMovement.lastMovementX + this.mouseMovement.lastMovementY) * multiplier * 1.5;
      }

      let i = 0;
      /*
        Execute an interval function which executes until duration == iteration count:
        
        - Calculates the new total transformation value per iteration
        - Updates the DOM elements with the new total transformation value
      */

      this.transforms[key].easeIntervalID = setInterval(() => {
        i++;

        if (i > this.transforms[key].easeDuration / 1.67) {
          // divided by 1.67 to match 60fps
          clearInterval(this.transforms[key].easeIntervalID);
          return;
        }

        this.transforms[key].dragValue = _Globals_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["HelperFunctions"].easeOutCalculation(i, this.transforms[key].easeValue, transformAmount, this.transforms[key].easeDuration);
        _Globals_HelperFunctions__WEBPACK_IMPORTED_MODULE_0__["HelperFunctions"].transform(this.elements, this.transforms);
      }, 16.7);
    }
  }

}

/***/ }),

/***/ "./src/Modules/Elements.js":
/*!*********************************!*\
  !*** ./src/Modules/Elements.js ***!
  \*********************************/
/*! exports provided: Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elements", function() { return Elements; });
/* harmony import */ var _Globals_MouseMovement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Globals/MouseMovement */ "./src/Modules/Globals/MouseMovement.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element */ "./src/Modules/Element.js");


class Elements {
  constructor() {
    this.elements = [];
    this.mouseMovement = new _Globals_MouseMovement__WEBPACK_IMPORTED_MODULE_0__["MouseMovement"]();
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
    const newElement = new _Element__WEBPACK_IMPORTED_MODULE_1__["Element"](selector, aniObject, this.mouseMovement);
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
    this.elements.forEach(val => {
      for (const key in val.transforms) {
        clearInterval(val.transforms[key].easeIntervalID);
      }
    }); // Use 20ms for smooth & performant animation

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
    this.elements.forEach(val => {
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
    } // Max speed


    this.mouseMovement.movementX = this.mouseMovement.movementX > 50 ? 50 : this.mouseMovement.movementX;
    this.mouseMovement.movementX = this.mouseMovement.movementX < -50 ? -50 : this.mouseMovement.movementX;
    this.mouseMovement.movementY = this.mouseMovement.movementY > 50 ? 50 : this.mouseMovement.movementY;
    this.mouseMovement.movementY = this.mouseMovement.movementY < -50 ? -50 : this.mouseMovement.movementY; // Execute drag function for each element

    this.elements.forEach(val => {
      val.drag();
    }); // Set seperate variable lastMovement to prevent a movement value of 0 in the ease out animation

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
    this.mouseMovement.currentMovementX = this.mouseMovement.touchX - this.mouseMovement.initialTouchX;
    this.mouseMovement.movementX = this.mouseMovement.currentMovementX - this.mouseMovement.prevMovementX;
    this.mouseMovement.prevMovementX = this.mouseMovement.currentMovementX;
    this.mouseMovement.currentMovementY = this.mouseMovement.touchY - this.mouseMovement.initialTouchY;
    this.mouseMovement.movementY = this.mouseMovement.currentMovementY - this.mouseMovement.prevMovementY;
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
    this.vh = window.innerHeight; // Set dragspeed of each element based on the viewport dimensions

    this.elements.forEach(val => {
      for (const key in val.transforms) {
        val.transforms[key].dragSpeed = val.transforms[key].dragSpeedInput / (this.vw / 500 + 2.5);
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
    this.vh = window.innerHeight; // Set dragspeed of each element based on the viewport dimensions

    this.elements.forEach(val => {
      for (const key in val.transforms) {
        // Define drag speed based on touch or mouse device
        val.transforms[key].dragSpeed = val.transforms[key].dragSpeedInput / (this.vw / 500 + 2.5);
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

/***/ }),

/***/ "./src/Modules/Globals/HelperFunctions.js":
/*!************************************************!*\
  !*** ./src/Modules/Globals/HelperFunctions.js ***!
  \************************************************/
/*! exports provided: HelperFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperFunctions", function() { return HelperFunctions; });
class HelperFunctions {
  constructor() {}
  /* 
    # easeOutCalculation
      Ease out calculation
    Returns the new total value
      i         =  current frame
    initial   =  initial property value
    add       =  addition or substraction to the initial value
    duration  =  duration of the animation in keyframes
  */


  static easeOutCalculation(i, initial, add, duration) {
    const t = i / (duration / 1.67); // divided by 1.67 to match 60fps

    return initial + t * -add * (t - 2);
  }
  /*
    # transform
      Create a string with all transform values
    Add them to the DOM element
  */


  static transform(elements, transforms) {
    const rotateY = transforms.rotateY ? `rotateY(${transforms.rotateY.dragValue}deg) ` : '';
    const rotateX = transforms.rotateX ? `rotateX(${transforms.rotateX.dragValue}deg) ` : '';
    const rotateZ = transforms.rotateZ ? `rotateZ(${transforms.rotateZ.dragValue}deg) ` : '';
    const translateY = transforms.translateY ? `translateY(${transforms.translateY.dragValue}px) ` : '';
    const translateX = transforms.translateX ? `translateX(${transforms.translateX.dragValue}px) ` : '';
    const translateZ = transforms.translateZ ? `translateZ(${transforms.translateZ.dragValue}px) ` : '';
    const transformString = rotateY + rotateX + rotateZ + translateY + translateX + translateZ;
    elements.forEach(el => {
      el.style.transform = transformString;
    });
  }

}

/***/ }),

/***/ "./src/Modules/Globals/MouseMovement.js":
/*!**********************************************!*\
  !*** ./src/Modules/Globals/MouseMovement.js ***!
  \**********************************************/
/*! exports provided: MouseMovement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseMovement", function() { return MouseMovement; });
/*
  Class description:
    Detect and store mouse and touch movement
    Detect and store changes to the viewport dimensions

    The movement values are stored on an event basis
    To use these values in a performant style, setInterval is used, movement values are
    accumulated between each interval and are used and then reset in each interval.
*/
class MouseMovement {
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
    } else if (matchMedia('(pointer:coarse)').matches && this.touchEnabled === false) {
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

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony import */ var _Modules_Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/Elements */ "./src/Modules/Elements.js");

const app = new _Modules_Elements__WEBPACK_IMPORTED_MODULE_0__["Elements"]();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");

_app__WEBPACK_IMPORTED_MODULE_0__["app"].create('.first', [{
  transform: 'rotateX'
}, {
  transform: 'rotateY'
}]);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map