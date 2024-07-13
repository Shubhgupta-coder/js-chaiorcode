"use strict"; //treat all as a newer version
// alert(3+3)  //we are using node js not browser   

// number , string , bool , null , undefines , symbol , bigInt

let age;  //undefined  
let age2 = null;   //null

console.log(typeof age);  //type of unddefined = > undefined
console.log(typeof age2); // type of null => object 

// primitive -> m stack m jaata h n referenve 
// non primitive m heap m jaata h ek baar change hone pr original val m bhi change hota h 

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3