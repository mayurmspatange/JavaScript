// try{


// // database connect open   // file open 
// // database traction 1
// // database traction  2  //error 
// // database traction 3
// // database traction 4
// // database connection close // file close
//    throw "";
// }
// catch(err){
//   console.log("err",err);
// }
// finally{
//    // close connection.. 
//    // file close...
//    // memory clear // variables deletion
// }



try {
   console.log("no error");
}catch(error){
    console.log("err", error);
}finally{
    console.log("in finally");
}


console.log("********************************************");

try {
    let a = b + 1;
    console.log("with error",a);

 }catch(error){
     console.log("err is : ", error.message);
 }finally{
     console.log("in finally");
 }