// let name = ["mayur", "dipti", "mayur"];  // dblicate values can be added in array.



// set Animal 

let arr = ["monkey","neha","donky"];
let animal0 = new Set(arr);
let animal1 = new Set(["monkey","donky"]);


let animal = new Set();


animal.add("Monkey");
animal.add("Tiger");
animal.add("Lion");
animal.add("rabbit");
animal.add("Zebra");
animal.add("sneks");
animal.add("Monkey");  //dublicate entry 

// arr.length  array 

console.log("Size of animal set is: ", animal.size);

if(animal.has("Zebra")){
    console.log("Y Zebra is avilable to eat");
    animal.delete("Zebra");
}
console.log("Size of animal after delete zebra is: ", animal.size);


animal.forEach(element => {
    console.log("Animals are: ",element);
});

// animal.forEach(
//     function(element) {
//     console.log("Animals are: ",element);
// });


let animals = animal.values(); 

console.log("arr",animals);

for (const sanimal of animals) {
    console.log("animal:= ",sanimal);
}
