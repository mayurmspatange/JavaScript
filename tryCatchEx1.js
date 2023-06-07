// age > 10 allow ; 

try {
    console.log("program start...");
    let age = 19;
    if(age < 10){
            throw "User is not Valid to play the game..."
    }
    console.log("user can play");

}catch(err){
    console.log("Error Message:", err);
}

console.log("program end..");