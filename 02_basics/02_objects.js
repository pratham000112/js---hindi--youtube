// object literals

const mysym =Symbol("MyKey1")

const CricketPlayers = {
     name : "Abhishek sharma",
      age : 27,
      location : "Punjab",
      [mysym] : "MyKey1",
      email :"Abhisharma123@gmail.com",
      isLoggedIn: false,
      LastLoginDays : ["Monday","Saturday"]
}

console.log(CricketPlayers.isLoggedIn)  //  this is the one method of doing that
console.log(CricketPlayers["location"]) //  this is the another method of that 

console.log(CricketPlayers[mysym])

// interview question use symbol as a key.
 
CricketPlayers.email = "Abhisharma123@yopmail.com";
//console.log(CricketPlayers);
//Object.freeze(CricketPlayers)
//CricketPlayers.email = "Abhisharma1234@yopmail.com"
//console.log(CricketPlayers)

CricketPlayers.greeting = function() {
    console.log("i am opening Batsman");
}

CricketPlayers.greetingTwo = function() {
    console.log(`${this.name} is the Great Power Hitter`)
}




console.log(CricketPlayers.greeting());
console.log(CricketPlayers.greetingTwo());

 




