import { Elements } from './Modules/Elements';

const dragimate = new Elements();

export function create(selector, animationObject) {
  return dragimate.create(selector, animationObject);
}
