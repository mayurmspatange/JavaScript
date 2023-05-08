// number 
let rollno = 1
let no2 = 3.5 
let no3 = -8.0
let num = -9


// If you add two numbers, the result will be a number:
let x = 10;
let y = 20;
let z = x + y;
// x + y = 30

// If you add two strings, the result will be a string concatenation:
let x1 = "10";
let y1 = "20";
let z1 = x1 + y1;
// x1 + y1 = "1020" != 30 

// only + will not work from arithmatic operators 
let x2 = "100";
let y2 = "10";
let z2 = x2 - y2;
// JavaScript will try to convert strings to numbers when dividing:
// 90

console.log("isNaN: ",isNaN("*"));

console.log("max safe number",Number.MIN_VALUE);


let acbd = 123;

console.log("the number value", typeof acbd.toString());

let c1 = 9.656;
console.log(c1);
console.log(c1.toFixed(0));
console.log(c1.toFixed(2));
console.log(c1.toFixed(4));
console.log(c1.toFixed(6));