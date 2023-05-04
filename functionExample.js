// // area Rectangle
// Solve for area
// A= l * w 


function areaOfRectangle(length , width){
    return (length*width);
}

let result=0;
result =  areaOfRectangle(23,54);
console.log("area of Rectangle :",result);


result=  areaOfRectangle(45,2);
console.log("area of Rectangle :", result);





// no parameters and no return value
function fahrenheitToCelsius(){
    let celsius = (23-32) * (5/9)
    console.log("celsius", celsius)
}

fahrenheitToCelsius();

// withParameters no return value

function fahrenheitToCelsiusWithParametes(fahr){
    let celsius = (fahr-32) * (5/9)
    console.log("celsius of fahrenheit",fahr," is : " , celsius)
}

fahrenheitToCelsiusWithParametes(50)

// withParameters wiht return value

function fahrenheitToCelsiusWithParametesWihtRetun(fahr){
    let celsius = (fahr-32) * (5/9)
    return celsius;
}

let res = fahrenheitToCelsiusWithParametesWihtRetun(60)
console.log("celsius of fahrenheit",60," is : " , res)
