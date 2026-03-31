
// filter method
const myNums = [1,2,3,4,5,6,7,8]

const newNums = myNums.filter( (num) => num > 4)
  //console.log(newNums);



  const books =[
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 200 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 150 },
  { title: 'Book Three', genre: 'Science', publish: 2001, edition: 320 },
  { title: 'Book Four', genre: 'History', publish: 1987, edition: 275 },
  { title: 'Book Five', genre: 'Fiction', publish: 2010, edition: 410 },
  { title: 'Book Six', genre: 'Biography', publish: 1999, edition: 180 },
  { title: 'Book Seven', genre: 'Technology', publish: 2020, edition: 95 },
  { title: 'Book Eight', genre: 'Philosophy', publish: 1975, edition: 220 },
  { title: 'Book Nine', genre: 'Mystery', publish: 2005, edition: 300 }
];

const  soldbooks = books.filter(  (product) => {
     return product.genre === 'Fiction'
    })

    const booksYear = books.filter( (product => { // when open the scope used the return Keyword in it
         return product.publish  >= 2000
    }))

//console.log(soldbooks)  // filter is used to filter all the values it does not want to print in it.

console.log(booksYear)

