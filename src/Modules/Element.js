/*
  # Class description:
  Select and store the DOM elements based on querySelector
  Store and manipulate an instance of AnimationObject inside of element.transforms

  Uses static HelperFunctions to:
  - Update the DOM with the latest transform values
  - Calculate easing for the ease out animation
*/

import { HelperFunctions } from './Globals/HelperFunctions';
import { AnimationObject } from './AnimationObject';

export class Element {
  constructor(selector, animationValues = false, mouseMovement) {
    this.elements = document.querySelectorAll(selector);
    this.mouseMovement = mouseMovement;
    this.easeRotation;
    this.transforms = new AnimationObject(animationValues);
    HelperFunctions.transform(this.elements, this.transforms);
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
          movement = Math.trunc(
            this.mouseMovement.movementX * this.transforms[key].dragSpeed
          );
          break;
        case 'vertical':
          movement = Math.trunc(
            this.mouseMovement.movementY * this.transforms[key].dragSpeed
          );
          break;
        default:
          movement = Math.trunc(
            (this.mouseMovement.movementX + this.mouseMovement.movementY) *
              this.transforms[key].dragSpeed
          );
      }
      // Update dragValue
      this.transforms[key].dragValue += movement || 0;
    }
    // Update the DOM elements based on the newly generated transform properties
    HelperFunctions.transform(this.elements, this.transforms);
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
      }
      // Copy the latest updated transformation value
      this.transforms[key].easeValue = this.transforms[key].dragValue;
      // Create a new multiplier based on the drag speed (to keep the ease speed relative to the drag speed)
      const multiplier = this.transforms[key].dragSpeed * 45;
      let transformAmount;

      // Deduct which mouse direction(s) are set to the animation object
      // Use that deduction to multiply the movementX and/or movementY values
      // Stores the calculated amount to transform inside of the variable transformAmount
      if (this.transforms[key].dragDirection === 'horizontal') {
        transformAmount = this.mouseMovement.lastMovementX * multiplier;
      } else if (this.transforms[key].dragDirection === 'vertical') {
        transformAmount = this.mouseMovement.lastMovementY * multiplier;
      } else if (this.transforms[key].dragDirection === 'both') {
        transformAmount =
          (this.mouseMovement.lastMovementX +
            this.mouseMovement.lastMovementY) *
          multiplier *
          1.5;
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
        this.transforms[key].dragValue = HelperFunctions.easeOutCalculation(
          i,
          this.transforms[key].easeValue,
          transformAmount,
          this.transforms[key].easeDuration
        );
        HelperFunctions.transform(this.elements, this.transforms);
      }, 16.7);
    }
  }
}
