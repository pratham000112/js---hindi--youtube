// only the odd Numbers.


const numbers = [2,3,4,5,6,7,8]

const myNum = numbers.filter(  (nums) => {
          return    nums % 2 !== 0
})
 
console.log(myNum)  // very good

// given an array where each number is doubled in it.

const arr = [2,4,6,8]

const newarr = arr.map( (doublearr)  => {
    return doublearr  * 2
});

console.log(newarr);// very good

// convert an array of the strng in the Uppercase.


const arr2 = ["apple","banana", "mango"]

const NewArr = arr2.map( (double) => {
    return  double.toUpperCase()  //  uppercase is  a function so use this () for this
 })

console.log(NewArr)


// array of uSERS , RETURN AN ARRAY OF ONLY USER names

const  arr3 = [
    {
        id : 1, name: "John",
    },
    {
        id: 2, name:"sara"
    }
]

  const userarr =  arr3.map( (names) => {
         return  names.name
  })

  console.log(userarr);


