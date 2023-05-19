
// switch (expresstion/Condition/Choice){  1 
//     case (1): 
//         statements 1  
//         statements 2 
//         statements 3  
//     break;

//     case (2): 
//     statements 1  
//     statements 2 
//     statements 3  
//     break;

//     case (3): 
//     statements 1  
//     statements 2 
//     statements 3  
//     break;

//     default: 
//     statements 1  
//     statements 2 
//     statements 3  
// }


let number = "adfaf";

switch(number){
    case 1:
        console.log("One");
        break;
    case 2: 
        console.log("two");
        break;
    case 3: 
        console.log("three");
        break;
    case 4: 
        console.log("four");
        break;
    case 5: 
        console.log("Five");
        break;
    case 6: 
        console.log("six");
        break;
    case 7: 
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9: 
        console.log("Nine");
        break;
    case 10: 
        console.log("Ten");
        break;
    
    default:
        console.log("the number is not valid");
}


// Assignment print days if 0 then print monday...


// A vowel is a letter that represents an open sound
// a, e, i, o, u


let char="a";

switch(char){
    case "a":
        console.log(char, " is vowel");
        break;
    case "e":
        console.log(char, " is vowel");
        break;
    case "i":
        console.log(char, " is vowel");
        break;
    case "o":
        console.log(char, " is vowel");
        break;
    case "u":
        console.log(char, " is vowel");
        break;
    default:
        console.log(char, " is not vowel");
}


console.log("End of the program");

// Assignment 2 
// "A" : Apple
// "B": Ball; A - Z



// 1. addition 
// 2. subtraction
// 3.Multiplication
// 4. Divide


let no=10;
let no2=3;

let choice=3;
var res;
switch(choice){
    case 1:
        res = no + no2
        console.log("Addition of "+ no +" and " + no2 + " is: " + res);
        break;
    case 2:
        res = no -  no2
        console.log("subtraction of "+ no +" and " + no2 + " is: " + res);
        break;
    case 3:
        res = no * no2
        console.log("Multiplication of "+ no +" and " + no2 + " is: " + res);
        break;
    case 4:
        res = no / no2
        console.log("Division of "+ no +" and " + no2 + " is: " + res);
        break;
    default:
        console.log("please select correct input");                 

}



