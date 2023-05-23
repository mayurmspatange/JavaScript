let i;
for(i=0; i<10; i++){
   console.log("this is a javascript", i);
}


console.log("program end",i);
// // 1st itration 
// i = 0
// i < 10 . ture

// stmt print/exetute 

// i++ = 1

// 2nd itration
// i = 1
// i < 10 . ture

// stmt print/exetute 
// i++ = 2


// j = j+ 2;

for(let j = 1; j<=10; j+=2 ){
   console.log(j);
}

//            0       1        2        3
let cars = ["BMW", "TATA" , "Maruti", "Audi"]
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
cars[4]


console.log("cars.length",cars.length);



for(i=0;i<cars.length;i++)
{
   console.log(" i: ", i+" : "+cars[i]);
}



// 1-100;



for(i=1;i<=10;i++){
   if(i%2==0){
      console.log(i , "is even number");
     }   
  }
  
  
  for(i=1;i<=20;i++){
     if(i%2!=0){
      console.log(i , "is odd number");
     }   
  }


//       0123456 7 8 9 10 11 12
  let str = "this is a pgm"
console.log(str);


for(i=0; i<str.length;i++)
   console.log("charter at position",i + " : "+str[i]);

