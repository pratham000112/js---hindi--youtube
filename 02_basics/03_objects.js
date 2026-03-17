//const Freemeetup = new Object() //  this is the single ton objects.
const Freemeetup = {}

Freemeetup.id = "123ab"
Freemeetup.name = "Kush"   
Freemeetup.isLoggedIn = false  // this is the object literals.
// this is the Empty Object literals in it.

//console.log(Freemeetup);


const regularUser = {
    email:"Kush12@yopmail.com",
    fullname: {
        userfullname: {
            firstname: "kush",
            lastname:"Kathuria"
          }
        }
    }

    //console.log(regularUser.fullname)

    const obj1 = {1:"a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    

    //const obj3 = Object.assign({}, obj1, obj2, )  //  this is the first syntax

    //console.log(obj3);

    //const obj3 = {...obj1, ...obj2} // this is the Second Syntax of mergening them in it.
      //console.log(obj3)


      console.log(Freemeetup);

      console.log(Object.keys(Freemeetup));

      console.log(Object.values(Freemeetup));

      console.log(Object.entries(Freemeetup));

      console.log(Freemeetup.hasOwnProperty('Age'));



