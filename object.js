
// object

const readline = require("readline");


let studentName = "Dipti";
let studentLname=  "ABCD";
let studentAge= 26;
let studentAddress= "pune";
 

console.log("student Name:",studentName + " " + studentLname);
console.log("student Age", studentAge);
console.log("Student Address:",studentAddress);


let studentName2 = "Vishakha";
let studentLname2=  "ABCD";
let studentAge2= 26;
let studentAddress2= "pune";


console.log("student Name:",studentName2 + " " + studentLname2);
console.log("student Age", studentAge2);
console.log("Student Address:",studentAddress2);




let emptyVariable = {}; //  empty object 


// key : value 

let studentInfo = {
   studentName : "Mayur",
   studentAge: 23,
   studentAddress: "Pune" ,
   Bdate : "yyyy/mm/dd" 
};

console.log("studentInfo", studentInfo);




// Array


console.log("Array");

let subject1 ="python"
let subject2 ="C"
let subject3 = "java"


let subjects = ["python", "c" , "java"]


console.log("subjects: ", subjects);



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let name = prompt("Please enter your name", "Harry Potter");