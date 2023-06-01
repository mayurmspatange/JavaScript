// Employee : epmName , empId , empAddress, empContact, 
// empSalary , empJoiningDate, epmDesignation


let Employee = new Map();


console.log("Size of Emp map is : ", Employee.size );

Employee.set("epmName","Dipti");
Employee.set("empId","1025");
Employee.set("empAddress","Pune");
Employee.set("empContact","898999888");
Employee.set("empSalary","59k");
Employee.set("empJoiningDate","12/12/2023");
Employee.set("epmDesignation","Software Developer");


console.log("After adding elements Size of Emp map is : ", Employee.size );


console.log("epmName:" ,Employee.get("epmName"));
console.log("empId:" ,Employee.get("empId"));
console.log("empAddress:" ,Employee.get("empAddress"));
console.log("empContact:" ,Employee.get("empContact"));
console.log("empSalary:" ,Employee.get("empSalary"));
console.log("empJoiningDate:" ,Employee.get("empJoiningDate"));
console.log("epmDesignation:" ,Employee.get("epmDesignation"));


if(Employee.has("empSalary")){
    Employee.set("empSalary","60000");
}

console.log("empSalary:" ,Employee.get("empSalary"));



Employee.delete("empSalary");

console.log("After delete elements Size of Emp map is : ", Employee.size );


console.log("");
console.log("************************************");

Employee.forEach (function(value, key) {
    // console.log("value is ",value);
    // console.log("key is ",k
    // ey);
    console.log(key+":"+value);
})
