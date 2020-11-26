// Section 6 - Webpack
//------------------//



// webpack notes

// 1 - creating functions to export

// functions: 
const isAdult = (age) => age >= 18; 
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;


// 2 - exporting functions

// two 'named exports' and 'default export' (can only have one default):
export { isAdult, canDrink };
export default isSenior;