// Sum of Even Numbers

let numbers = [1,2,3,4,5,6]

let sum = 0;


numbers.forEach( (no) =>{
      if(no % 2 == 0) {
         sum += no;
      }
});


console.log(`sum of even numbers : ${sum}`);


// Capitalize Names

let playernames = ["virat", "rohit","rajatPatidar"]

let UpperNames = []
playernames.forEach( (Caption) =>{
         UpperNames.push(Caption.toUpperCase());
});

console.log(UpperNames);