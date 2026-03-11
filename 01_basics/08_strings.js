const name = "Pulkit"
const commit = 20

console.log(`Hello my name is ${name} and my repo count is ${commit}`); // This method is called string interpolation
 // javascript evalutes the variable and insert its value in the string.


 const gameName = new String('Pratham')

 console.log(gameName[0]);
 console.log(gameName._proto_);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());

 // what is proto and why it is undefined in it.

 console.log(gameName.charAt(1));
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0, 4)
 console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 
 const  player = "    virat Kohli   "
 console.log(player)
 console.log(player.trim()); // if we use the method used like that trim function in it.

 const websiteurl = "https://hitesh.com/hitesh%20chaudhary"

 console.log(websiteurl.replace('%20','-10'));

 console.log(websiteurl.includes('hitesh')); // is used to check whether you contain the specific value in it.


 console.log(player.split("-"));

 const strPrim = "foo"
const  strPrim2 = String(1)
const strPrim3 = String(true)
const obj = new String(strPrim);// it is cause the unexpected behavior .

console.log(typeof strPrim)
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof  obj)  // string cannot convert the type of the object in it.

const s1 = "2 + 2"
const  s2 = new String("2 + 2");

console.log(eval(s1))
console.log(eval(s2))

//eval is a built in j/s function that executes a string as a j/s code.

// the main use of the eval is the code come dynamically as a string in it.


let expression = "8 * 7 +10"
console.log(eval(expression));
// it is used in the dynamic code.



