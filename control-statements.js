for (let index = 1; index <= 10; index++) {
    console.log("in loop");
    if(index==5){
        console.log("in condition");
        break;
        console.log("");
        console.log("");
    }
    console.log("i = ", index);    
}

console.log("");
console.log("");


for (let index = 1; index <= 10; index++) {
    console.log("in loop");
    if(index==5){
        console.log("in condition");
        continue;
        console.log("");
        console.log("");
    }
    console.log("i = ", index);    
}





let array = ["mayur","Dipti","Vishakha","ashish"];


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element==="Dipti"){
        console.log("braking the loop");
        break;
    }
    console.log("element",element);
    console.log("");
}

console.log("");
console.log("");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element==="Dipti"){
        console.log("continue the loop");
        continue;
    }
    console.log("element",element);
    console.log("");
}

console.log("end");
