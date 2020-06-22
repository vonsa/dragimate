/*
      Class description:
      Uses logic that incorporates the user input to
      generate an object which holds all the
      object related properties and values.
    */

export class AnimationObject {
  constructor(animationObject) {
    this.create(animationObject);
  }

  /*
    # create

    Top level function which
    controls and combines results of several other internal functions
    */

  create(animationObject) {
    animationObject.forEach((userInput) => {
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
      maxDragSpeed: 60,
    };
    this[userInput.transform] = {};
    this[userInput.transform].active = true;
    this[userInput.transform].dragSpeedInput =
      userInput.dragSpeed || defaultAnimationValues.dragSpeed;
    this[userInput.transform].dragSpeed =
      userInput.dragSpeed || defaultAnimationValues.dragSpeed;
    this[userInput.transform].easeValue = userInput.initialValue || 0;
    this[userInput.transform].dragValue = userInput.initialValue || 0;
    this[userInput.transform].easeSpeed =
      userInput.easeSpeed || defaultAnimationValues.easeSpeed;
    this[userInput.transform].easeDuration =
      userInput.easeDuration || defaultAnimationValues.easeDuration;
    this[userInput.transform].dragDirection = dragDirection || 'both';
    this[userInput.transform].maxDragSpeed =
      userInput.dragSpeed * 110 || defaultAnimationValues.dragSpeed * 110;
  }
}
