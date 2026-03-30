// for of loops

const arr = [1, 2, 3, 4, 5]


for (const ar of arr) {
     console.log(ar);
     
}


const greetings = "Heelo World!"
  for (const greet of greetings){
      console.log(greet)
  }

  const map = new Map()
  map.set('IN', "India")
  map.set('USA',"United States of America")
  map.set('Fr', "France")


  //console.log(map);  //  how to used the map in for-of loop.

for (const [key,value] of map) {
     console.log(key, ':-', value);
}

