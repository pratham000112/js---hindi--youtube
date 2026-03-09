

// stack

let myWebsite = "pulkit.com"
let Website = myWebsite

Website = "pucho.com"

console.log(myWebsite);
console.log(Website);

// the stack is that it give the copy of the refrence not the full refrence in it so it value cannot change in it.

//Heap

const  Websiteinfo =
{
      Websitename:"pulkit.com",
      Websitedeveloper:"Pulkit virmani"
        
}


Websitestatus = Websiteinfo
Websitestatus.Websitedeveloper = "Harshita"

console.log(Websitestatus)
console.log(Websiteinfo)

// in the heap it give the refrence of the object if the one value is changed in it the another is also changed in it.
