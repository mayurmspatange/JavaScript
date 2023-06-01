// let StudentName = "Dipti";
// let StudentRoll = '123';
// let Address="ABCD";
// phone , parent, class , div , sports 


let Student = {
    Name:"Dipti",
    RollNumber: 123,
    sportsMan: true,
    address:"xyz",
    Name: "tea"
};


Student['email'] = "abcd@yahoo.com"   //adding a properties 



console.log(Student);

Student['email'] = "abcd@gmail.com"   //adding a properties 
console.log(Student);

let Stud = new Map(
        [
            ['Name',"Amit"],
            ["rollnumber",123],
            ["address","pune"]
        ]
);

console.log("the size of stud map: ",Stud.size);



Stud.set("mobileNumer","8899335566")


console.log("the size of stud map after adding new element: ",Stud.size);

console.log("Stud roll numer is",Stud.get("rollnumber"));

// let RollNumerispresentornot = Stud.has("rollnumber");

// console.log("RollNumerispresentornot: ",RollNumerispresentornot);

if(Stud.has("rollnumber")){
    Stud.delete("rollnumber")
}

console.log("the size of stud map after deleting  rollnumber element: ",Stud.size);


console.log("");
console.log("");
console.log("");

Stud.forEach (function(value, key) {
    // console.log("value is ",value);
    // console.log("key is ",k
    // ey);
    console.log(key+":"+value);
})

let en = Stud.entries();

console.log("entiris",en);

for (const ele of en) {
        console.log("ele:",ele
    );
}


