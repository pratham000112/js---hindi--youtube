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



