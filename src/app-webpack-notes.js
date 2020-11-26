// Section 6 - Webpack
//------------------//



// webpack notes

// 1 - import and export

// grab the 'default export' and two 'named exports' from 'utils.js' file:
import subtract, { square, add } from './utils.js';
// with 'default exports' naming is not important:
// import anyName, { square, add } from './utils.js'; <-- previously called 'subtract'

// grab the 'default export' and two 'named exports' from 'person.js' file:
import isSenior, { canDrink, isAdult } from './person.js';

// using functions from 'utils.js' file:
console.log(square(4)); 
console.log(add(4,21));
console.log(subtract(34,20));
// change name of default export:
// console.log(anyName(34,20));  <-- previously called 'subtract'


// using functions from 'person.js' file:
console.log(isAdult(25)); // <-- true
console.log(canDrink(15)); // <-- false
console.log(isSenior(67)); // <-- true


// 2 - importing 'npm' modules (install in terminal first)

// import the modules 'default export':
import validator from 'validator';

// testing:
console.log(validator.isEmail('test')); // <-- false
console.log(validator.isEmail('test@aa.com')); // <-- true

// import 'default exports' from 'react' and 'react-dom':
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));
