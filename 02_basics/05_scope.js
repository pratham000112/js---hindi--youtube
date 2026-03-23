
let a = 200  // global scope
 
if(true) {
    let a = 10
     const b = 20
        console.log("Inner:", a);  // Inner scope
}



console.log(a);