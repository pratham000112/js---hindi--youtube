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


// Count occurence

let element = ['a','e','b','c','d','f','a','b','c']

let countelement = [];

element.forEach((item) => {
      if (countelement[item]) {
              countelement[item]++;
      } else { 
             countelement[item]=1;
      }
});   

console.log(countelement);  // if it increase by 1  then increase or Whenever choose 1


// Extract Prices

let  stationary = [
        {
           Input: {
               name:"Pen",
                 Price:10
           },
      },
       {
              Input : {

              
              name: "Book",
               Price: 200
           }
      }     
];
  
 let result = [];

   stationary.forEach( (product) => {
          result.push(product.Input.Price);  // result is used to add the value in the Push in it
   });

console.log(result);






