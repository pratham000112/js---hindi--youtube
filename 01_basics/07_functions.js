
//functions are reausable block code designed to perform some particular tasks.

// functions are defined with the function keyword followed by the parathanses.
     
function sayHello()  {
    return "Hello World"
}

let message = sayHello()
console.log(message)

//Local Variable
 // variable decalred with the j/s function , become local to the function.
 // the code inside the function is not executed when the function is defined.
 

 // Parameters functions
 // Parameters allow you to pass or send the value to a function.
   // listed inside the paranthesis  in the function defination in it.


   function  tocelsius(fahrenheit) {
      return (5/9) * (fahrenheit-32)
   }

   let value = tocelsius(77)
   console.log(value)   
