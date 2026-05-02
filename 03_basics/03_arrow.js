//this is used to refer the current context

const user = {
    username: "unnati",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam" //context changed
// user.welcomeMessage()

// console.log(this); //in a node environment the this refers to empty object
//global object in browser is window 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
    
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }
// chai()

const chai = () => {       //arrow function
    let username = "unnati"
    console.log(this); //{}
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2 //explicit return
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1 + num2 //implicit return

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: "unnati"}) 
//to return an object it has to wrapped in parenthesis
//if curly braces are used we have to write return keyword
//if parenthesis are used no need to write retuen keyword
console.log(addTwo(3,4))


const myArray = [2,3,4,5,6]
// myArray.forEach()

