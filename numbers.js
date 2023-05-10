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



let no = 123;


console.log("before Converted value ", typeof no);

let str = no.toString();
console.log("Converted value ", typeof str);

(123).toString();
(100 + 23).toString();


// Number: 
    // interger : -1 ,-2, -3 ,-4, -5, -6 0  1 ,2, 3 ,4, 5, 6.. . . . 
    // float value: 1.234, 21.213 2.123


let number = 10.10;
console.log(parseInt(number))
// toString;

let intNumber =  "56";
console.log("intNumber:", typeof intNumber);
console.log(typeof parseFloat(intNumber))


console.log(Number(true));

// Number(true) + "<br>" +
// Number(false) + "<br>" +
// Number("10") + "<br>" + 
// Number("  10") + "<br>" +
// Number("10  ") + "<br>" +
// Number(" 10  ") + "<br>" +
// Number("10.33") + "<br>" + 
// Number("10,33") + "<br>" +
// Number("10 33") + "<br>" +
// Number("John");

// Number.parseInt("-10");
// Number.parseInt("-10.33");
// Number.parseInt("10");
// Number.parseInt("10.33");
// Number.parseInt("10 20 30");
// Number.parseInt("10 years");
// Number.parseInt("years 10");


console.log("MAX_VALUE in jS", Number.MAX_VALUE);
console.log("MIN_VALUE in jS", Number.MIN_VALUE);

console.log("MIN_SAFE_INTEGER in jS", Number.MIN_SAFE_INTEGER);
console.log("MAX_SAFE_INTEGER in jS", Number.MAX_SAFE_INTEGER);
