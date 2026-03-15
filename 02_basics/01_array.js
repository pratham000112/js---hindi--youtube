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

           let Num = [2,4,6,8]

           let even = Num.filter(n =>n%2 ==0)  // it is used to filter the Method in it.
           let EvenTest = Num.map(n =>n%2 ==0)  // it is used to Map the Method in it.
              console.log(EvenTest)
            console.log(even)

              let  number = [1,3,5,7,9]

               let sum =  number.reduce((total,n) => total - n,0);
               console.log(sum)  // it is start with the 0 so it answer will be -25
            
               let score = [60,70,80]
                score.forEach(num =>console.log(num));




                let BatsmanEconomy = [10,20,30]

                let AverageEconomy = BatsmanEconomy.find(n => n > 25)

                console.log(AverageEconomy)
            // the importance of find function in it stops at when it find the first Element in it.


            // Array Destructing
// it is  use to the exact the value from the table and the database and assign them to variable easily.
      // it is the like instead of assigning the variable using the indexes arra[0], arr[1]  destruction into the 
      // let you unpack  value into the variables in it.


      const GoatedPlayers  = ["virat Kohli","Hardik Pandya","Jasprit Bumrah","Jitesh Sharma"]
         //const  [first , second , third] = GoatedPlayers  // using all the value

      
         //const [second , , fourth] = GoatedPlayers  // used for the Skipping them.


         //console.log(first);
         //console.log(second);
         //console.log(third);
         //console.log(fourth);

        // Default values
        const AusPlayers = ["Travis Head"];

        const [first, ,third= "Pat cummins", fourth = "Adam Zampa"] = AusPlayers;

        console.log(first);
        console.log(third);
          console.log(fourth);

















              

            
               

         



 