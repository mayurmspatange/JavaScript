
try {
    console.log("program start");

    let no1 = 10;
    let no2 = 0 // 1;

    if(no2 === 0){
        throw "No2 value is 0 and its devide by zero excption. please give valid input"
    }

    console.log("calculation begin..");
    let res = no1 / no2 ;

    let ans = res * 3;

    console.log("Ans is:",ans);

}
catch(error){
    console.log("error message :", error);
}