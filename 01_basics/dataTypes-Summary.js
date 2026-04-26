// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //return type is also Symbol
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 34567893456723n


/*JavaScript (JS) is a dynamic language.
In JavaScript, you do not need to tell the data type beforehand.
The language figures it out while the program is running.
*/


// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Unnati",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber); //undefined 

// console.log(typeof outsideTemp); //object

// console.log(typeof scoreValue); //number

// console.log(typeof myFunction); //function

// console.log(typeof heros); //object

// console.log(typeof anotherId); //symbol

//**********************************************
//memory

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "unnatirajdotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "unnati@google.com"

console.log(userOne.email);
console.log(userTwo.email);

