// Section 6 - Webpack
//------------------//



// webpack notes

// 1 - creating functions to export

// functions:
const square = (x) => x * x;
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;


// 2 - exporting functions

// two 'named exports' and 'default export' (can only have one default):
export { square, add, subtract as default };


// 3 - inline exporting (alternate syntax):

// export inline:
// export const square = (x) => x * x; <-- 'named export'
// export const add = (a,b) => a + b; <-- 'named export'
// export default subtract; <-- 'default export' (two lines; references line 13, can be on line 14)
// export default (a,b) => a - b; <-- 'default export' (one line, no function name) 