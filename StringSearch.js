
let statement = "The easiest Way for teams to way ms develop & test on Kubernetes is with Telepresence way for Docker"

let index = statement.indexOf("way");

console.log("Index of way is", index);

index = statement.search(/way/i)
console.log("Index of way using search", index);



index = statement.lastIndexOf('way');
console.log("Index of way using lasIndexOf", index);

index = statement.match('ms')
console.log("Index of way using match", index);


index = statement.match(/ay/g);
console.log("Index of way using match", index);


index = statement.matchAll(/way/gi);
console.log("Index of way using matchAll", Array.from(index));


let result = statement.includes("Develop")
console.log("string includes develop", result);

result = statement.startsWith("The");
console.log("string Startswith the", result);


result = statement.endsWith("Docker");
console.log("string endswith the", result);
