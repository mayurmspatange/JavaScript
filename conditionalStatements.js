// Conditional Statements

// Very often when you write code, you want to perform different actions for different decisions.

// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// if 
// if else
// if esleif else ladder 
// switch case 


let dicscoutC=0;
let price=1000;


// if(dicscoutC){
//     console.log("calculating the discout");
//     price = price -dicscoutC;
//  }



if(dicscoutC){
   console.log("calculating the discout");
   price = price -dicscoutC;
}else {
    price = price- 10;
}



console.log("Fianl price:",price);  // 900

let a =10;
let b =20;

if(a>b){
    console.log("a is greater then b");
}
// else{
//     console.log("a is smaller then b");
// }

if(a<b){
    console.log("a is smaller then b");
}

// assignments : 

// 1. compare link operation ;
// 2. compare the numbers using if esle;