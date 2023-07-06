
function print1to10(){
    console.log("excuted first: ");
    for(let i = 0; i<10;i++)
        console.log("i:",i);
}
// setTimeout(print1to10, 4000);

// setTimeout(()=>{
//     for(let i = 0; i<10;i++)
//         console.log("i:",i)
// }, 4000);

let interval = setInterval(print1to10, 2000);
setTimeout(() => {
    clearTimeout(interval);
}, 10000);