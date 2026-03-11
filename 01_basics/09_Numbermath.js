const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1));

// Precision topic study.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));



const strPrim = "foo"
const  strPrim2 = String(1)
const strPrim3 = String(true)
const obj = new String(strPrim);// it is cause the unexpected behavior .

console.log(typeof strPrim)
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof  obj)  // string cannot convert the type of the object in it.








