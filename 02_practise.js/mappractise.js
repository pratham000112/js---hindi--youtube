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



//   const users = [
//     {name: "A", age: 25, isActive: true, purchases: [100,200]},
//     {name: "B", age: 30, isActive: false, purchases: [400,500]},
//     {name: "C", age: 30, isActive: false, purchases: [500,800]}
//   ]


// const find = users.filter( (activeusers) => {
//      return activeusers.isActive
// })

// const result = users.reduce((acc,totalvalue) => {
//     return acc + totalvalue.purchases.reduce((sum, price) => {
//           return sum + price;
//     },0);


    // intermediate level coding questions

    const players = [
        { name : "Virat kohli", avg: 25, isPlaying: true},
        { name : "Rohit sharma", avg: 20, isPlaying: false},
        { name : "Rajat Patidar", avg: 30, isPlaying: true},
    ]
    // active in squard  and average is more than 25

    const activeplayers =  players.filter( (player) => {
        return player.isPlaying === true && player.avg >=25;
    });

    console.log(activeplayers);

    
    const score = [
        {Team: "RCB", score:[250, 300]},
        {Team:"CSK", score:[100, 48]}
    ]


    // total score

    const totalscore = score.reduce((acc,  team) => {
           const teamtotal = team.score.reduce((sum, runs) => sum + runs , 0);
             return acc + teamtotal;
    }, 0);

    console.log(totalscore);





