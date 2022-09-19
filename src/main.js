import { add, add2 } from './index';
import applyInfo from './jsons/applyInfo.json';
import answer from 'the-answer';

const result = add() + add(2);
console.log(add(), add2(2)); // eslint-disable-line
console.log(applyInfo); // eslint-disable-line

export { result };
export const rollAnswer = function () {
  console.log('answer', answer); // eslint-disable-line
};
