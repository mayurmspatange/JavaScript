console.log("\n");
console.log("********************************************Math Properties******************************************** ");


console.log("MATH.E", Math.E);
console.log("Math.LN10", Math.LN10);
console.log("Math.LN2", Math.LN2);
console.log("Math.LOG10E", Math.LOG10E);
console.log("Math.LOG2E", Math.LOG2E);
console.log("Math.PI", Math.PI);
console.log("Math.SQRT1_2", Math.SQRT1_2);
console.log("Math.SQRT2", Math.SQRT2);

console.log("\n");
console.log("********************************************Math Number to Integer/Methods/functions ******************************************** ");

console.log("Math.round(4.5):",Math.round(4.5)); //5
console.log("Math.round(4.1):",Math.round(4.1)); //4
console.log("Math.round(4.7):",Math.round(4.7)); //5


console.log("\n");
console.log("Math.ceil(x) returns the value of x rounded up to its nearest integer:");
console.log("\n");

console.log("Math.ceil(4.9):",Math.ceil(4.9));  //5
console.log("Math.ceil(4.7):",Math.ceil(4.7)); //5
console.log("Math.ceil(4.4):",Math.ceil(4.4)); //5
console.log("Math.ceil(4.2):",Math.ceil(4.2)); //5
console.log("Math.ceil(-4.2):",Math.ceil(-4.2)); //  -4


// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log();
console.log("Math.floor(4.9)",Math.floor(4.9));   //4
console.log("Math.floor(4.7)",Math.floor(4.7)); //4
console.log("Math.floor(4.4)",Math.floor(4.4)); //4
console.log("Math.floor(4.2)",Math.floor(4.2)); //4
console.log("Math.floor(-4.2)",Math.floor(-4.2)); // -5

// Math.trunc()
// Math.trunc(x) returns the integer part of x:

console.log();
console.log("Math.trunc(4.9):",Math.trunc(4.9));  //4
console.log("Math.trunc(4.7):",Math.trunc(4.7)); //4
console.log("Math.trunc(4.4):",Math.trunc(4.4)); //4
console.log("Math.trunc(4.2):",Math.trunc(4.2)); //4
console.log("Math.trunc(-4.2):",Math.trunc(-4.2)); //4


// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

console.log();
console.log("Math.sign(-4)",Math.sign(-4));
console.log("Math.sign(0)",Math.sign(0));
console.log("Math.sign(4)",Math.sign(4));



// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

console.log();
console.log("Math.pow(8,2)",Math.pow(8,2));
console.log("Math.pow(10,2)",Math.pow(10,2));
console.log("Math.pow(3,5)",Math.pow(3,5));
console.log("Math.pow(5,6)",Math.pow(5,6));


// Math.sqrt()
// Math.sqrt(x) returns the square root of x:


console.log();
console.log("Math.sqrt(64):",Math.sqrt(64));
console.log("Math.sqrt(256):",Math.sqrt(256));
console.log("Math.sqrt(1024):",Math.sqrt(1024));
console.log("Math.sqrt(2048):",Math.sqrt(2048));



// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

console.log();
console.log("Math.abs(-4.7):",Math.abs(-4.7));


// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


console.log();
console.log("Math.sin(90 * Math.PI / 180):",Math.sin(90 * Math.PI / 180));



// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.



console.log();
console.log("Math.cos(0 * Math.PI / 180):",Math.cos(0 * Math.PI / 180));
 

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:


console.log();
console.log("Math.min(0, 150, 30, 20, -8, -200, 1 , 45, -430):",Math.min(0, 150, 30, 20, -8, -200, 1 , 45, -430));

console.log();
console.log("Math.mix(0, 150, 30, 20, -8, -200, 1 , 45, -430):",Math.max(0, 150, 30, 20, -8, -200, 1 , 45, -430));


// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

console.log("Math.random():", Math.random());

let math = Math.random();
console.log("math.random() 0-10: ",math + ":" ,Math.floor((math*10)));


console.log("math.random() 0-100: ",math + ":" ,Math.floor((math*100)));


// The Math.log() Method
// Math.log(x) returns the natural logarithm of x.

// The natural logarithm returns the time needed to reach a certain level of growth:

console.log();
console.log("Math.log(1):",Math.log(1));
console.log("Math.log(2):",Math.log(2));
console.log("Math.log(3):",Math.log(3));


// The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.

console.log();
console.log("Math.log2(8):",Math.log2(8));

// The Math.log10() Method
// Math.log10(x) returns the base 10 logarithm of x.


console.log();
console.log("Math.log10(1000):",Math.log10(1000));