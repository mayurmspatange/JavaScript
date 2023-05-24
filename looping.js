// for(Init;condition;increment/decrement){

// }

// let i=0;

// while(condition){
//     // statements ;
//     // i++ / i++ / i+=2
//     // incre/decre  
// }


// 1 - 10 print using while loop


let i = 1;

while(i<=10){
    console.log("",i);
    i++;
}

console.log("after while loop: ", i);


let arr = ["Ankit","Rahul","Mayur","Dipti","Aashish"];
console.log(arr);


console.log(arr[0]);
console.log(arr[3]);

console.log("");

i = 0;   

while(i<arr.length){
    console.log(arr[i]); 
    i++;
}

// 1 st itration 

// i=0;
// 0<5  true
// print  arr[0]
// i++ = 1 

// 2 nd itration 
// i=1;
// 1<5  true
// print  arr[i] = arr[1]
// i++ = 2


// 3 rd itration 
// i=2;
// 2<5  true
// print  arr[i] = arr[2]
// i++ = 3

// 4 th itration 
// i=3;
// 3<5  true
// print  arr[i] = arr[3]
// i++ = 4


// 5 th itration 
// i=4;
// 4<5  true
// print  arr[i] = arr[4]
// i++ = 5

// 5 th itration 
// i=5;
// 5<5  false

// loop end 





let str = "this is a while loop"

i = 0;
let count=0;
console.log("str.lenght is :",str.length);
while(i<str.length){
    console.log("str["+ i +"] : " + str[i]);
    if(str[i]=='s' || str[i]=='S'){
        console.log("got the s at : ", i );
        count++;
    }
    i++;
}


console.log("count of S is: ",count);




/// foreach
// let arr = ["Ankit","Rahul","Mayur","Dipti","Aashish"];
// 
arr.forEach(
    
    function(element) {
        console.log(element);
        
    }
);



let student = {
    name:"Rakesh",
    address: "Pune",
    monumber:"123123123"
}   

console.log("");
console.log(student["name"]);

for (const key in student) {
    console.log(student[key]);
}
