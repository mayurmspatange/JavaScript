
let todaysDate=new Date("2022-03-25");

console.log("Date:",todaysDate);


console.log("date:",todaysDate.getDate()); //.17

console.log("\n");
console.log("********************************************Date Get Methods******************************************** ");


console.log("Month:",todaysDate.getMonth());  
console.log("Year:",todaysDate.getFullYear());
console.log("Day:",todaysDate.getDay());
console.log("Hours:",todaysDate.getHours());
console.log("Miniutes: ",todaysDate.getMinutes());
console.log("getSeconds",todaysDate.getSeconds());
console.log("getMilliseconds",todaysDate.getMilliseconds());
console.log("getTime",todaysDate.getTime());

console.log("\n");
console.log("********************************************Date Formats******************************************** ");

console.log("Custom date:", new Date());
console.log("String Custom date: ", new Date("2022-03-25"));
console.log("year month Custom date:", new Date(2023,05));
console.log("year,month,day Custom date:", new Date(2023,05,17));
console.log("year,month,day,hours Custom date:", new Date(2023,05,17,8));
console.log("year,month,day,hours,minutes Custom date:", new Date(2023,05,17,8,56));
console.log(" year,month,day,hours,minutes,seconds Custom date:", new Date(2023,05,17,8,56,56));
console.log("year,month,day,hours,minutes,seconds,ms Custom date:", new Date(2023,05,17,8,56,56,567));
console.log( "milliseconds Custom date:", new Date(1648166400000));

console.log("\n");
console.log("********************************************SET Methods******************************************** ");

const d = new Date();
d.setMonth(11);
d.setYear(2021);
d.setHours(12);
console.log("after setMethods time", d);
