let arr = ["lotus", "rose", "mogara", "hibiscus" ];
let flowers = new Set([arr]);
console.log("flowers",flowers);
console.log("flowers.size", flowers.size);
if(flowers.has("lotus")){
    console.log("yes");
}
flowers.delete("mogara");
console.log("flowers.size", flowers.size);
console.log("flowers",flowers);

flowers.forEach(values => {
    console.log("flowers values", values);
});
for(let ele of flowers){
    console.log("flowers ele", ele);
}
 let flower = flowers.values()
 console.log("flowers values",flowers);
