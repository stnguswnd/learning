//모듈 불러오기
//import / from

//from : 어디서 불러올 것이냐
//import : 무엇을 불러올 것이냐
import { add, substract, multiply, devide } from "./math.js";

console.log(add(2, 1));
console.log(substract(2, 1));
console.log(multiply(2, 1));
console.log(devide(2, 1));

import calculator from "./calculator.js";

console.log(calculator);
console.log(calculator.add(1, 2));
