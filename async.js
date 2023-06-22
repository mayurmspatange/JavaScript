function printOneToTen(){

    setTimeout(
        () =>{
            for (let index = 1; index <= 10; index++) {
                console.log("index: ",index);        
            }
        }
    , 3000);
}

function printTToF(){

    for (let index = 30; index <= 40; index++) {
        console.log("index 2 : ",index);        
    }
}



printOneToTen();

printTToF();
