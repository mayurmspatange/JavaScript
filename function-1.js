function Addition(no,no2){   // function defination

    setTimeout( 
        ()=> {
             console.log("inside timeout function");
             let subres = subtraction(10,9);
             console.log("subtract:",subres);    
        }
        , 3000);

}
// function invoke/call



// console.log("Addition :",res);



// function defination
function subtraction(no1,no2){
    return no1-no2;
}

// function call



Addition(23,2);




