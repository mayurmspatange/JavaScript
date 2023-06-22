let myPromise = new Promise(function (resolve, reject) {
  let dataentry = false; //db connect and add entry;
  if (dataentry) {
    resolve();
  } else {
    reject();
  }
});

myPromise.then(
  function () {
    console.log("Promise resolved..");
  },
  function () {
    console.log("Promise rejected..");
  }
);


let evenOddPromise = new Promise(function (resolve, reject) {
  let no = 11;
  if (no % 2 == 0) {
    resolve("Number is even");
  } else {
    reject("Number is odd");
  }
});

evenOddPromise.then(
    function(msg){
        console.log("msg from resolve: ",msg);
    },function(msg){
        console.log("msg from reject: ",msg);
});



function data (){
    // let sequencePromise = new Promise(function(resolve){
        return new Promise(function(resolve){
            setTimeout(
                () =>{
                    for (let index = 1; index <= 10; index++) {
                        console.log("index: ",index);        
                    }
                    resolve();
                }
            , 3000);
        });
}
// sequencePromise.then(function(){
//     for (let index = 30; index <= 40; index++) {
//         console.log("index: ",index);        
//     }
// })


async function abcd () {
    let data1 = await data();
    console.log("data");
}


abcd();