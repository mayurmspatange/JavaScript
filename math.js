// Math.round()
var a = 3.2;
var b = 3.8;
console.log(Math.round(3.2));
console.log(Math.round(3.8));
//output: 3, 4


//Math.ceil()
let c = 2.3;
let d = 3.8;
let e = 4.6;
let f = 2.9;
console.log(Math.ceil(2.3));
console.log(Math.ceil(3.8));
console.log(Math.ceil(4.6));
console.log(Math.ceil(2.9));
//output: 3, 4, 5, 3

//Math.floor()

let x = 4.5;
let y = 5.9;
let z = 6.3;

console.log(Math.floor(4.5));
console.log(Math.floor(5.9));
console.log(Math.floor(6.3)); 
//output: 4, 5, 6

//Math.trunc
let p = 2.3;
let q = 3.7;
let r = 4;

console.log(Math.trunc(2.3));
console.log(Math.trunc(3.7));
console.log(Math.trunc(4));   //output: 2, 3, 4

//Math.pow()
var pow = 3;
var pow1 = 5;
console.log(Math.pow(3,2));
console.log(Math.pow(5,2)); //output: 9, 25


//Math.sqrt() 

let sqrt1 =49;
console.log(Math.sqrt(49)); //output: 7

let sqrt2 =64;
console.log(Math.sqrt(64)); //output: 8

//Math.abs(x) returns the absolute (positive) value of x:
let abs1 = -2.3;
let abs2 = -3;
let abs3 = -5.7;
let abs4 = 6;

console.log(Math.abs(-2.3));
console.log(Math.abs(-3));
console.log(Math.abs(-5.7));
console.log(Math.abs(6));    //output: 2.3, 3, 5.7, 6

//Math.min()
var min1 = (0, 150, 30, 20, -8, -200);
console.log(Math.min(0, 150, 30, 20, -8, -200));

var max2 = (0, 150, 30, 20, -8, -200);
console.log(Math.max(0, 150, 30, 20, -8, -200));

let min =(2, 3, -150, 200, 78, -44);
console.log(Math.min(2, 3, -150, 200, 78, -44));

let max =(4, 89, 12, -56, -100);
console.log(Math.max(4, 89, 12, -56, -100 ));

//Math.random()
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10)+1);
console.log(Math.floor(Math.random() * 100)+1);


