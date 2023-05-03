// function functionName(para1,...) {


    //   return;

// }

// Pi * r *r 

let radius = 10;
let result = 3.14 * radius * radius; 

console.log("areaOfCircle 10 is:",result);


radius = 15;
result = 3.14 * radius * radius; 

console.log("areaOfCircle 15 is: ",result);


// 1. function with no parameters and no return type;

// functon defination;
function area(){
    let areaOfCircle = 3.14 * 11 * 11; 
    console.log("areaOfCircle 11 is :", areaOfCircle);
}

area();



// 2. function with parameters and no return type;

function areaWihtParameters(radius){
    let areaOfCircle = 3.14 * radius * radius; 
    console.log("areaOfCircle "+ radius + " is :", areaOfCircle);
}


// console.log("areaOfCircle "+ radius + " is :", areaOfCircle);


areaWihtParameters(14);
areaWihtParameters(17);
areaWihtParameters(20);

// console.log("areaOfCircle "+ 56 + " is :", areaOfCircle);



// 3. function with parameters and with  return values;

function areaWihtParametersWithReturnValues(radius){
    let areaOfCircle = 3.14 * radius * radius;
    return areaOfCircle;
}

let ans = areaWihtParametersWithReturnValues(56);

console.log("areaOfCircle "+ 56 + " is :", ans);