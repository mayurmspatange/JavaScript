// let student = {
//     "name":"Rahul",
//     "rollNumber": 123,
//     "sportsMan": true,
//     "favSubjects": ["HINDI","ENglish"],
//     "Salary":null
// }

// let nameArr = ["ABCD","xyz","uvw"];
// let number = [1,1,4,7,8,9,0]
// let boolanas = [true,false,true,false]
// let studentList =  [
//     {
//         "name":"Rahul",
//         "rollNumber": 123,
//         "sportsMan": true,
//         "favSubjects": ["HINDI","ENglish"],
//         "Salary":null
//     },
//     {
//         "name":"Rahul",
//         "rollNumber": 123,
//         "sportsMan": true,
//         "favSubjects": ["HINDI","ENglish"],
//         "Salary":null
//     }
//     ,{
//         "name":"Rahul",
//         "rollNumber": 123,
//         "sportsMan": true,
//         "favSubjects": ["HINDI","ENglish"],
//         "Salary":null
//     }
// ] 


let employesDeatils = [
    {
    "Name":"Rraghav",
    "age":32,
    "address":"Pune",
    "sportsman":true,
    "favColors": ["Red","Yellow","Green"],
    "ContactDeatils": {
        "type":"mobile",
        "No":9823631607
    }
},
 {
    "Name":"Deepak",
    "age":31,
    "address":"Mumbai",
    "sportsman":true,
    "favColors": ["Yellow","Green"],
    "ContactDeatils": {
        "type":"telephone",
        "No": "020123213"
    }
}

]

console.log(employesDeatils[1].ContactDeatils.No);
console.log(employesDeatils[0].sportsman);
console.log(employesDeatils[0].favColors[0]);




// push 
// object["key"] = "values"
let emp = {
    "Name":"Neha",
    "age":28,
    "address":"Solapur",
    "sportsman":true,
    "favColors": ["Yellow","Green"],
    "ContactDeatils": {
        "type":"telephone",
        "No": "12323211"
    }
}
employesDeatils.push(emp);

console.log(employesDeatils);


let stringJson = '{"name":"rahul","age":"12"}'

console.log(typeof stringJson , stringJson);


let strOject = JSON.parse(stringJson);    //sting to object 
console.log(typeof strOject , strOject);



let str = JSON.stringify(strOject);   // object to string
console.log(typeof str , str);


console.log(strOject.age);