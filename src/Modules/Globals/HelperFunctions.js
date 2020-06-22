export class HelperFunctions {
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
    const rotateY = transforms.rotateY
      ? `rotateY(${transforms.rotateY.dragValue}deg) `
      : '';
    const rotateX = transforms.rotateX
      ? `rotateX(${transforms.rotateX.dragValue}deg) `
      : '';
    const rotateZ = transforms.rotateZ
      ? `rotateZ(${transforms.rotateZ.dragValue}deg) `
      : '';
    const translateY = transforms.translateY
      ? `translateY(${transforms.translateY.dragValue}px) `
      : '';
    const translateX = transforms.translateX
      ? `translateX(${transforms.translateX.dragValue}px) `
      : '';
    const translateZ = transforms.translateZ
      ? `translateZ(${transforms.translateZ.dragValue}px) `
      : '';

    const transformString =
      rotateY + rotateX + rotateZ + translateY + translateX + translateZ;

    elements.forEach((el) => {
      el.style.transform = transformString;
    });
  }
}
