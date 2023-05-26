//let arr = ["maruti", "BMW", "fiat", "volvo"]
// cars1 = new Set([arr]);
//console.log("cars1", cars1);


let cars = new Set();
cars.add("maruti");
cars.add("BMW");
cars.add("fiat");
cars.add("volvo");
console.log("cars", cars);
console.log("size of cars", cars.size);

if(cars.has("BMW")){
    console.log("yes BMW is available ");
}

cars.delete("volvo");
console.log("size of cars", cars.size);
console.log("cars", cars);

let c = cars.values();

for (const car of c) {
    console.log("c",car);
}
cars.forEach(values => {
    console.log("cars values", values);
});
for(let values of cars){
    console.log("cars", values);
}