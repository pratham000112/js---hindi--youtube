
function sayHello (){
    console.log("p");
    console.log("u");
    console.log("l");
    console.log("k");
    console.log("i");
    console.log("t");
}

sayHello()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(2,2)

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//       return result
// }

// const result = addTwoNumbers(3,5)

// console.log("Result", result);

function addTwoNumbers(number1, number2){
       return number1 * number2
}

const result = addTwoNumbers(5,5)
   console.log("Result",result);


function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
         return 
    }
       return `${username} just logged in`
}
                
console.log(loginUserMessage())

//console.log(loginUserMessage("Harshita"))

//backsticks is used for the templeate literals it is used to  insert variable inside the string

// Rest operator
function calculateCartPrice(val1, val2,...num1) {
    return num1
}


console.log(calculateCartPrice(200,400,500,2000))


