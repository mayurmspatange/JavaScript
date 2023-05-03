function colorChange()  {
    document.getElementById("para1").style.color= "red";
    document.getElementById("para1").style.fontSize= "30px";


}

function add(){
    let number = document.getElementById("number1").value;    
    console.log("number1", number);
    console.log("number2", number);
    // console.log("number3", number);
    console.log("number4", number);
    console.log("number5", number);

    // window.alert("number"+number);
    // document.write(number);

    let number2 = document.getElementById("number2").value;
    console.log("number2", number)

    document.getElementById("output").value = parseInt(number) + parseInt(number2);
}
