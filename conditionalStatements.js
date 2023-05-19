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


// even or odd  

let number = 10 ;


if(number%2==0){
    console.log("Number is even number");
}
else{
    console.log("Number is odd number");
}


// -ve and +Ve 

let num = -8;

if(num<0){
    console.log("the number is -ve");
}else if(num==0){
    console.log("the number is not +Ve either -ve because its 0");
}else{
    console.log("the number is +ve");
}


// 1-7 for days else if ladder
let day=6;

if(day==1){
    console.log("Its Monday");
}else if(day==2){
    console.log("Its Tuesday");
}else if(day==3){
    console.log("Its Wednesday");
}else if(day==4){
    console.log("Its Thursday");
}else if(day==5){
    console.log("Its Friday");
}else if(day==6){
    console.log("Its Saturday");
}else if (day==7){
    console.log("Its Sunday");
}else {
    console.log("Givn input is invalid..");
}

console.log("End program");