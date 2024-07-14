// singleton
// Object.create -> ye constrctor wala method h 

// object literals

const mySym = Symbol("key1")   ///symbol 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //is tarah se hm symbol ko declare krte  unsde object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)   // iske baad object m koi bhi change execute nhi hoga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this mtlb hm jis object m h hm usi object ko use krre h 
}
console.log(JsUser.greeting) // yaha pr ye bs [Function (anonymous)] is tarah se deta jh
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());