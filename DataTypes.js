
// collection of (a-zA-Z0-9@#!$%^)
var str;
str = "Dipti123@gmail.com";
console.log("1. '",str,"'","is : ",typeof(str), "dataType")

// number datatype
var num = 10 ;
console.log("2. '",num,"'","is : ",typeof(num), "dataType")

// With decimals:
let x1 = 34.00;
console.log("3. '",x1,"'","is : ",typeof(x1), "dataType")


// Exponential Notation

let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
console.log("3.1 '",y,"'","is : ",typeof(y), "dataType")
console.log("3.2 '",z,"'","is : ",typeof(z), "dataType")


// number and string
var numstr = 10 + "10";
console.log("4. '",numstr,"'","is : ",typeof(numstr), "dataType")

// number and number 
var numstr1 = 10 + 10;
console.log("5. '",numstr1,"'","is : ",typeof(numstr1), "dataType")


let abcd = "Volvo"+ 16 + 4;
console.log("6. '",abcd,"'","is : ",typeof(abcd), "dataType")


// JavaScript Types are Dynamic
var data = 5 ; // Now x is a Number
console.log("7. data = ", data);
console.log("data type : ", typeof(data));


data = "acd" // Now x is a String
console.log("8. data = ", data);
console.log("data type : ", typeof(data));



// JavaScript BigInt

var x = BigInt("123456789012345678901234567890");

console.log("9. '",x,"'","is : ",typeof(x), "dataType")


// JavaScript Booleans
let isSeatAllocated = "true";
console.log("10. '",isSeatAllocated,"'","is : ",typeof(isSeatAllocated), "dataType")

let isBooksAllocated = true;
console.log("11. '",isBooksAllocated,"'","is : ",typeof(isBooksAllocated), "dataType")
console.log( "isBooksAllocated == isSeatAllocated", isBooksAllocated == isSeatAllocated);

