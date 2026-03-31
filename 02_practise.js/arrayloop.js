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


const books =[
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 200 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 150 },
  { title: 'Book Three', genre: 'Science', publish: 2001, edition: 320 },
  { title: 'Book Four', genre: 'History', publish: 1987, edition: 275 },
  { title: 'Book Five', genre: 'Fantasy', publish: 2010, edition: 410 },
  { title: 'Book Six', genre: 'Biography', publish: 1999, edition: 180 },
  { title: 'Book Seven', genre: 'Technology', publish: 2020, edition: 95 },
  { title: 'Book Eight', genre: 'Philosophy', publish: 1975, edition: 220 },
  { title: 'Book Nine', genre: 'Mystery', publish: 2005, edition: 300 }
];




