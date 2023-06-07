let employee = {
    stuName :[
        {
            "name" : "neha",
            "rollno" : 13,
            "mobno" : 3292292938

        },
        {
            "name" : "mayur",
            "rollno" : 31,
            "mobno" : 7839290202
        },
        
    ]
}
console.log();
employee.stuName.forEach(function(std){
    console.log(std);
});
let names =[
{
    "name" : "neha",
"rollno" : 13,
"mobno" : 3292292938
}, 

{
"name" : "preet",
"rollno" : 24,
"mobno" : 2818273894
}]
names.forEach(function(ele){
    console.log(ele);
    console.log(ele.name);
    console.log(ele.mobno);
});

let stu={
    name:[
        {
    "name":"neha",
    "rollno":123,
    "mobno":9302982028
},
{
"name":"krishna",
"rollno":321,
"mobno":8039040002
}]
}
stu.name.forEach(function(ele){
    console.log(ele);
    console.log(ele.name);

})