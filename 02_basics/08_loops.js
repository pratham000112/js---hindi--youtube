

  for(let i = 0; i<=10; i++) {
       const element = i;
       if (element === 8) {
          console.log("8  is my number");
       } 
                                 
       console.log(element);   // for or if 
  }


//   for(let i = 1; i <=10; i++) {
//       console.log(`outer loop values: ${i}`);
//     for(let j = 1 ; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);  // for - for
//     }
//   }

let myArray = ["flash","batman","superman"]
   console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
     const element = myArray[index]
      console.log(element);   // Array for Loop
      
}

let index= 2;
while (index <= 10) {
        console.log(`value of the index is ${index}`);
           index = index +2;

}

let Playerarray = ["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah"]

let arr = 0
while (arr < myArray.length) {
         console.log(` they are the Goat Players ${Playerarray[arr]}`)
              arr = arr + 1;
}
