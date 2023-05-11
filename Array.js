var carCompany1 = "BMW";  // 2 byte
            //    0123
var carCompany2 = "TATA";   // 2 byte 


// let carCom = ["BMW", "TATA", "jeep", "mahindra" , 231, new Date()];

// 1 st way
            //  0       1       2       3
let carCom = ["BMW", "TATA", "jeep", "mahindra"];


// | BMW | TATA | jeep | mahindra | 

// console.log(carCompany1)
// console.log(carCompany2)
// console.log(carCom)

console.log(carCom)

carCom[4] = "volvo"

console.log(carCom)

carCom[5] = "tesla"

console.log(carCom)

            // 0     1        2        3       4
let name = ["neha","mayur","deepak","ganesh","krishna"]; 
console.log(name);

name[2] = "shubham";

console.log("after name[2] replced",name);

name[5] = "pavan";

console.log("after adding a new element at name[5]",name);

name[7] = "sunita";

console.log("after adding a new element at name[7]",name);




            //  0     1      2        3         4
var animal = ["dog","can","horse","elephant","zebra"];
console.log(animal);

animal[0] = "lion";
console.log(animal);

animal[4] = "tiger";
console.log(animal);

animal[5] = "kangaroo";
console.log(animal);


            //      0     1     2        3        4       5   
let furniture = ["sofa","bed","chair","dresser","desk","table"];

console.log(furniture);

furniture[0] = "bench";
console.log(furniture);

furniture[4] = "bookself";
console.log(furniture);

furniture[6] = "coffee table";
console.log(furniture);




// carCom name animal furniture  rollNumbers

console.log("CarCom array",carCom);


let lenghtofarr = carCom.length;
console.log("Length of car array",lenghtofarr);

let carSorted = carCom.sort();
console.log("Car array after sorting:", carSorted);

let rollNumbers= [67,87,55,33,45,66,1];
console.log("rollNumbers", rollNumbers);
console.log("after sorting rollNumberArray",rollNumbers.sort());




console.log("name array",name);
console.log("Length of name array: ",name.length);
console.log("sort of name array: ",name.sort());



console.log("animal array",animal);
console.log("Length of animal array: ",animal.length);
console.log("sort of animal array: ",animal.sort());


console.log("furniture array",furniture);
console.log("Length of furniture array: ",furniture.length);
console.log("sort of furniture array: ",furniture.sort());

let arrtostr = furniture.toString();
console.log("type of furniture : ", typeof furniture);
console.log("type of arrtostr : ", typeof arrtostr);


let recoreds = furniture.push("tv unit");
let recoreds1 = furniture.push("tea pot unit");
let newfurniture = furniture.concat("door");

console.log("after push furniture : ",recoreds1, furniture);
console.log("after concat newfurniture : ", newfurniture);

let ele = furniture.pop()
console.log("after pop furniture : ",ele, furniture);

let ele1 = furniture.pop()
console.log("after pop furniture : ",ele1, furniture);

delete furniture[2];
console.log("after delete furniture[2] furniture : ", furniture);




// Merging (Concatenating) Arrays

let furnitureAndAnimal = furniture.concat(animal);
console.log("after Concatenating furniture and animal : ", furnitureAndAnimal);


let furnitureAndAnimalAndCarCom = furniture.concat(animal,carCom);
console.log("after Concatenating furniture and animal and carCom array : ", furnitureAndAnimalAndCarCom);













