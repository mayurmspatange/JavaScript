// class grandFather {
//     constructor(){
//         this.BP = Bp;
//         this.sugar = sugar;
//         this.iqlevel = iqlevel;
//     }
// }


class Person {     //parent class
    constructor(name,age,address,phone){
        this.name = name;
        this.age= age;
        this.address = address;
        this.phone = phone;
    }
    displayCommonValues(){
        console.log("Name : ",this.name);
        console.log("Age : ",this.age);
        console.log("Address : ",this.address);
        console.log("Phone : ",this.phone);
    }
}

class Student extends Person{    //child class
    constructor(name,age,address,phone,number, division){
        super(name,age,address,phone);  //  => // this.name = name;
                                            // this.age= age;
                                            // this.address = address;
                                            // this.phone = phone;
        this.rollNumber = number;
        this.division = division;
    }

    displayStudentValues(){
        // console.log("Name : ",this.name);
        // console.log("Age : ",this.age);
        // console.log("Address : ",this.address);
        // console.log("Phone : ",this.phone);
        this.displayCommonValues();
        console.log("Roll Number  : ",this.rollNumber);
        console.log("Division : ",this.division);
    }
}
let student = new Student("Mayur",28,"pune","23123123",21,"B");
student.displayStudentValues();
// console.log("Student name ", student.name);


class Employee extends Person {
    constructor(name,age,address,phone,Empid,salary){
        super(name,age,address,phone);
            this.Empid = Empid;
            this.salary = salary;
        }
    displayEmpValues(){
        this.displayCommonValues();
        // console.log("Name : ",this.name);
        // console.log("Age : ",this.age);
        // console.log("Address : ",this.address);
        // console.log("Phone : ",this.phone);
        console.log('EmpID:',this.Empid);
        console.log('Salary:',this.salary);

    }
}

let emp1 = new Employee("Mayur",28,"pune","23123123",21,"110K");
emp1.displayEmpValues();





