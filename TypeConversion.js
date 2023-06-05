// number
//   -int 2 , 1, 4, 6
//   -float 123.123  
// string 
// boolean 
// object
//   - date  
    //  - object 
    //  - array 

// The global method Number() converts a variable (or a value) into a number.


// String to number 

let str = "123";
console.log("str is belongs to : "+ typeof str , " data type" , str);


let strnum = Number(str);
console.log("After type conversion str is now ", typeof strnum, strnum);

let blankString = Number("")
console.log("The data is ", blankString, "and the type is ", typeof blankString);


console.log("digits with space: ",Number("99 88"))
console.log("staing as alphbets: ",Number("Dipti"))



// Number Int / float
// Integer :  -2 -1 0 1 ,2 ,3, 4,5 ,6,7,89,0
// float : 2.3 , 0.11, -123.56 


let floatNumber = 123.123;

let floatNumber1 = "213132.123";

 let no1  = parseInt(floatNumber);

 console.log("after parseInt: " , no1);

 let no2  = parseInt(floatNumber1);

 console.log("after parseInt: " , no2);


 let no3= parseFloat("1234565.234");


 console.log("no3 :", no3);



//  NUMBER TO STRING 


let number = 123123.1233;

console.log("the type of number is ", typeof number);


let str1 = String(number)

console.log("after string coversion number type is ", typeof str1 , str1);


let st2 = number.toString();

console.log(typeof st2);



//  Date to number 

let d = new Date()
console.log(Number(d));



// Date to String 

let d1 = new Date();
let das1 = String(d1)
console.log("type of d1 is :", typeof d1);
console.log("data type is : ", typeof das1 , "and value is: " , das1)





//  boolean to Number 

let flag = false;
console.log("type of flag is : ", typeof flag);

let no23 = Number(flag);

console.log("after convert to number type is : " , typeof no23 , no23);



let flag1 = true;
console.log("type of flag1 is : ", typeof flag1);

let no234 = Number(flag1);

console.log("after convert to number type is : " , typeof no234 , no234);




//  boolean to string 

let flag3 = false;
console.log("type of flag is : ", typeof flag3);

let no235 = String(flag3);

console.log("after convert to String type is : " , typeof no235 , no235);


// console.log("compare : ", flag3===no235);

let flag12 = true;
console.log("type of flag1 is : ", typeof flag12);

let no2342 = String(flag12);

console.log("after convert to number type is : " , typeof no2342 , no2342);
