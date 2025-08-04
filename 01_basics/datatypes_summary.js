// Primitive data types 
// 7 types : Strings, boolean , null , undefined, Symbol, BigInt(big values)

const score= 100
const scoreValue=100.3

const isloogedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherID=Symbol('123')
console.log(id=== anotherID);


const bigNumber = 234325925792034873402748783n




// Non-Primitive(refrence type)

//Array, Objects, Functions

const aniCharc=["NAruto","Luffy", "Goku"]

let obj={
    name:"Rishikesh",
    age:22,

}


const myFunction=function(){
    console.log("Hello world");
    
    
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive), heap(Non preimitive) 


///Stack example
let myName="rihsikesh Sagare"

let anothername=myName
anothername="rishikesh Rajendra Sagare"
console.log(myName);
console.log(anothername);

//heap
 let userOne={
    email:"user@gamil.com",
    upi:"user@hdfc"
 }

 let userTwo=userOne

userTwo.email="rishi2gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


