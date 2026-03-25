
let a = 200  // global scope
 
if(true) {
    let a = 10
     const b = 20
        console.log("Inner:", a);  // Inner scope
}


function one(){
     const username = "Pulkit virmani "

     function two(){
         const website = "freeMeetup"
             console.log(username);
     }
     //console.log(website);

       two()
}
one()
//console.log(a);

if(true) {
      const username = "Pulkit"
         if(username === "Pulkit") {
              const website = "youtube"
                 console.log(username + website);       
         }
           // console.log(website);
}
//console.log(username)

console.log(addone(5))
function addone(num) {
        return num + 1
}


//addone(5)

// Hosting concept
addTwo(5)
const addTwo = function(num){
      return num + 2
}