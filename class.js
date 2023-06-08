class Car {
    constructor(name, model){
        this.Name = name;
        this.ModelName = model;
    }
    displayData() {
        console.log("name:",this.Name);
        console.log("Model Name",this.ModelName)
    }
}


let carObject = new Car("Tata","Nano")
carObject.displayData();

// console.log("Name of First car object is :",carObject.Name);
// console.log("Model of First car object is :",carObject.ModelName);

let car2 = new Car("BMW","X-10");
car2.displayData();

// console.log("Name of 2nd object is :",car2.Name);
// console.log("Model of 2nd car object is :",car2.ModelName);



class Students {
    constructor( name, age , phone , address){
        this.Name = name;
        this.Age  = age;
        this.PhoneNO = phone;
        this.Address = address;
    }

    displayData() {
        console.log("Student Name = ",this.Name);
        console.log("Student Age = ",this.Age);
        console.log("Student Phone Number = ",this.PhoneNO);
        console.log("Student Address = ",this.Address);
    }
}

let std1 = new Students("Dipti",26,"000000","pune")
let std2 = new Students("Ashish",27,"000000","pune")
let std3 = new Students("Vishakha",24,"000000","pune")


std1.displayData();
std2.displayData();
std3.displayData();