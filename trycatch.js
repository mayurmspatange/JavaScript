let x = 15;
let y = 10;
let arr=["one", "two", "three", "four", "five", "six", "seven"];
x=arr.length;
try{
    if(x>6){ 
        throw "error";
    }

    console.log(x);
}
catch(err){
    console.log(err);
}


try{
    
    if(y == 0) throw "not a number";

    console.log(x/y);
}
catch(err){
    console.log(err);
}



try{
    if(x>20) throw "number is greter than 20"
    console.log(x + y );
    
    if(y>10 && x==20) throw "error";
    console.log(x-y);
    console.log(x*y);

    if(x>=16 || y>10) throw "error";
    console.log(x*y);
}
catch(err){console.log(err);}

