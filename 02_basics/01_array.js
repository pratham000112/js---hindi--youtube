// array.

const myArr = [10,20,30,40,50,60]
 console.log(myArr)

 console.log(myArr[0])

 // Array is that enable storing a collection of multiple items  under a single variable names, array can store the any data type in it.
 
 // Example of array.
// it is the like the basket . it contains many fruits but  the basket is the one object in it.

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift

console.log(myArr.includes(50)); // it is a question method
console.log(myArr.indexOf(3));

console.log(myArr)


// shallow copy and the Deep copy.
 // shallow copy are like the heap and the deep copy are like the stack.

// slice
 let text = "MarkZucerburg"
 console.log(text.slice(0,7)) // in this the last number is before the last digit in it.

     // replace.
    let player = "virat kohli"
      console.log(player.replace("King Virat Kohli"))

        //Uppercase.
      let player1 = "Jitesh Sharma"
         console.log(player1.toUpperCase())

         // object Keys and values
         let Bowler = {name:"Josh Hazelwood", age : 30}
          console.log(Object.keys(Bowler));
          console.log(Object.values(Bowler));
 

          // Map it is used to map the value i do that i multiply by 2 in it.
           let numbers = [1,2,3]

           let result = numbers.map(n => n * 2);
           console.log(result)

         



 