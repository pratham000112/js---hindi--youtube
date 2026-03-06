let score = "45abc";

//console.log(typeof score)

//console.log(typeof (score))

let valueinNumber = Number(score)
//console.log(typeof valueinNumber)

//console.log(valueinNumber)

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let boolenNumber = ""

let isLogged = Boolean(boolenNumber)
//console.log(isLogged)


// 1 = true
// 0 = false
// "0" = true
// "1" = true  same occur on the name
// "" = false


//  string Type Conversion in J/s


//console.log("1"+2+2)
//console.log(2 + 1 + "1")


//js evalutes expressions left to right in it.

// this thing happen due to the type coercian.


let gameCounter = 100
gameCounter++;
//console.log(gameCounter)



//console.log("5"-2) // reason is that for the (- * /) convert the value into a number.

// conversion with the Boolean

//console.log(true+1) //  reason is the true is = 1
//console.log(false+1) //  reason is the false is = 0

 
//conversion with the Null

//console.log(Number(null)) // reason is when the Number is converting into the Number it show the empty value to the null that is Zero in it
//console.log(Number(undefined)) //  means the variable declared but cannot assigned the value in it . is it show the Nan


// new type conversion in it


console.log("2">1)
console.log("02">1)
console.log("02" == 1)
console.log("02" >= 1)

