// variable declaratoin 
var a;
var b;
var c;

// variable initilization 
a = 10;
b = 11;
c = a + b;
a = 40;

console.log("value of c: "+c);


// variable   declaratoin and initilization 
let x = 10;
let y = 20;
let z = x + y;


console.log("Addition of x  + y = ",z);

 t = 10;
 u = 20;
 o = t + u;
console.log("Addition of t  + u = ", o);


// const variable

const PI = 3.14;


// ++PI;

console.log("const value",PI);



var abc = 40;
console.log("var a before redeclare", abc);


var abc = 30;

console.log("var a redeclare", abc);



let abcd = 40;
console.log("var a before redeclare", abcd);

// Cannot redeclare block-scoped variable 'abcd'.ts(2451)
    // SyntaxError: Identifier 'abcd' has already been declared
// let abcd = 30;

console.log("var a redeclare", abcd);

// var x1 = 10;

{
 var x1 = 10;

}


// ReferenceError: x1 is not defined
console.log("x1 is ", x1);