let str = "this is my first program";
let counta = 0;
let countm = 0;
let countf = 0;
let countp = 0;

for(let i=0;i<str.length;i++){
    if(str[i]=="a"){
        counta++;
    }
    if(str[i]=="e"){
        countm++;

    }
    if(str[i]=="i"){
        countf++;
    }
    if(str[i]=="o"){
        countp++;
    }
 }

 console.log("a:",counta);
console.log("m:",countm);
console.log("f:",countf);
console.log("p:",countp);