// singleton 

// objects Literals

const JsUser = {
    name: "Rishi",
    age : 20,
    location:"Mumbai",
    email: "rishisagare@gooogle.com",
    isLoggedin: false,
    lastLoginDay: ["Monday","Saturday"]
}
// console.log(JsUser["location"]);

// JsUser.location="America"

// console.log(JsUser["location"]);
// console.log(JsUser);
JsUser.greeting = function () {
    console.log("Hello Js Users");
    
}
JsUser.greetingtow = function () {
    console.log(`Hello Js Users, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtow());

// Note ;- Most of the time we will access the value using "." in some case we will use "[squar brakets]"

