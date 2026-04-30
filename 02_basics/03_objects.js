// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Unnati",
    "full name": "Unnati Raj",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "unnati@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "unnati@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "unnati@microsoft.com" //value will not change here
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

