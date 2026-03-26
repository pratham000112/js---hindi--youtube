const temperature = 20


if (temperature > 50){
     console.log("less than 50");
} else {
      console.log("temperature is greater than 50");
}

const score = 200

if (score >100) {
    let power = "fly"
      console.log(`User power: ${power}`);
}

const balance = 1000

//if(balance > 500) console.log("test")   // implicit Scope

if (balance < 500) {
     console.log("less than 500");
} else if (balance < 750) {
      console.log("less than 750");
    
} else if (balance < 900) {
       console,log("less than 900")

}else {
    console.log(" it is greater than 1200")
}


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
 const LoggedInFromEmail = false

if(userLoggedIn && debitCard) {
    console.log("Allow to Buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail) {
       console.log("Allow user to  Enter");
}






 