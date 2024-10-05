import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Hero } from '../interfaces';
// import { Hero } from './interfaces/hero';


/* printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
printObject('Hola Mundo!'); */

/* console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hola Mundo').toUpperCase());
console.log(genericFunction(new Date()).getDate());

console.log(genericFunctionArrow(3.1416).toFixed(2)); */

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Wingston Wilson',
  dangerLevel: 130
};

console.log(genericFunctionArrow<Hero>(deadpool));