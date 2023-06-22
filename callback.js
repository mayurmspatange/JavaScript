// 2 number + =  ans * 10;


function Addition(no1 , no2){
        return no1+ no2;        
}


// let ans = Addition(10,20);
// console.log("ans",ans);

function multi(add){
    console.log("Multiply",10* add);
}


// multi(ans);



function Add(n,n1 ,myCallback){
    let ans = n+n1;
    myCallback(ans);   // multi(ans)
}

Add(10,10,multi)

// 1. Subtact 
// 2. sub ans / 2 ;



function sub(n,n1,myCallback){
  let sub = n-n1;
  myCallback(sub);

}

function devide(ans){
    console.log("devide: ",ans/2);
}

sub(10,5,devide);

Add(101,10,devide)



let str = "ABCD"
let str2 = "XYZ"

// str.concat()  
// str + str2

function concatStr(st,st2, myCallback){
    let res = st.concat(st2);
    myCallback(res);  
}

function calculateLength(stringInput){
    console.log("length of concatinated string is :", stringInput.length);
}

function strreverse(strin){
    let rev= "";
    for(let i=strin.length-1; i >=0;i--){
        rev += strin[i];
    }
    console.log("rev String",rev);
};

concatStr(str,str2,calculateLength);
concatStr(str,str2,strreverse);
