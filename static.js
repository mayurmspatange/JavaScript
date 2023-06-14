class Car{
    constructor(CarModel){
        this.CarModel = CarModel;
    }
    display(){
        console.log("Car Model = ",this.CarModel);
    }
    static displayCarData(){
        console.log("inside satic method");
    }
}

let TataCar = new Car("Tata Nano");

TataCar.display(); /// calling by using oject 

Car.displayCarData();

