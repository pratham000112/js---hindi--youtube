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

console.log(newarr);