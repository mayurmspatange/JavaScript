let personName= "Ram"
let Address= "flat no 301 ,\n  building\t number  4 \n near wakad pune, pipmple \
guaro , pin number 411017 pune ";


let newAddress= "flat no 301 ,\n  building\t number  4 \n near wakad pune, pipmple" +
"guaro , pin number 411017 pune";


let personLName='  it\'s  "doke" ' 

console.log(personLName);
console.log("address is :", Address);

console.log("length of address is :", Address.length);

let flatnumber = newAddress.slice(0,11);

console.log("flatnu:", flatnumber);


// If you omit the second parameter, the method will slice out the rest of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7)

console.log("part:", part);

// Extract a part of a string counting from the end:
text = "Apple, Banana, Kiwi";
part = text.slice(-8);

console.log("part:", part);



// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.


str = "Apple, Banana, Kiwi";
part = str.slice(7, 7);
console.log("using slice ",part);


str = "Apple, Banana, Kiwi, Kiwi, Kiwi";
part = str.substr(7, 7);

console.log("using substr",part);


// The replace() method replaces a specified value with another value in a string:

// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
console.log("string before replace",str );

let replace = str.replace('Kiwi', 'apple')

console.log("replced string",replace );


replace = str.replaceAll('Kiwi', 'apple')
console.log("replced string",replace );
