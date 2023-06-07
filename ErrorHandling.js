// let a = 0 + 1;   //excuton stop
// console.log("hello");
// console.log("a",a);


// let no = 10;
// let no1 = 0;

// let res = no / no1;   // devide be zero error 
// console.log("addition of two ", res + 12);



try {
    console.log("hello at start");
    let a = b + 1;   
    console.log("hello"); // db connect --> 
    console.log("a",a);

}
catch(error){
    console.log(error.message);
}


console.log("Hello at end");