var no1 = 20;
var no2 = 10;

var result = (no1 == no2);
console.log("no1 equal to no2: ",result);
console.log("3 and 4 are equals?: ", 3==4);

var str = "10";
var str1 = 10;

console.log("str1 and str2 are equals ? ", str==str1);

console.log("str1 and str2 are equals ? ", str===str1);



result = no1 != no2;
console.log("result of != is :",result);


// not equal value or not equal type

console.log("str1 and str2 are equals ? ", str!==str1);




var no3 = 20;
var no4 = 10;

result= (no3 > no4);
console.log("no3 > no4 greater then:", result);

result= (no4 > no3);
console.log("no4 > no3 greater then:", result);


result= (no3 < no4);
console.log("no3 < no4 less than:", result);

result= (no4 < no3);
console.log("no4 < no3 less than:", result);





// 1. age > 18 
// 2. age == 18 or age > 18;
let age = 18;
result=(age>18);
console.log("age:>",result);


result = (age>=18);
console.log("age >=:",result);




// 1. age < 18 
// 2. age == 18 or age < 18;
let age1 = 18;
result=(age1<18);
console.log("age:<",result);


result = (age1<=18);
console.log("age <=:",result);




// ?	ternary operator
// (condition) ? statement1 : statement2;

result = age>=18 ? console.log("entry allow"): console.log("Entry not allow");