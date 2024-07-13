let age = 33;
let age2 = "33"
let val  = "33abc";
let val1 = null;
let val2  = undefined;
console.log(typeof age)
console.log(typeof age2)
console.log(typeof val) 
val = Number(val);
val1 = Number(val1);
val2 = Number(val2);
console.log(typeof val) 
console.log(val) // it will show NAN because 33abc is converted to numbver but its actual value is NAN
console.log(val1) // it will show 0 
console.log(val2) //it will show NAN

let a = 10;
console.log(typeof a.toString())  // original string  m change nhi aata
let b = String(a);
console.log(typeof a)
console.log(typeof b)


let isLogin = 'hitesh';
let empty = ""
let num  = 12;
let num2  = 0;
let boolisLogin = Boolean(isLogin);
let boolnum = Boolean(num)
let boolnum2 = Boolean(num2)
let boolempty = Boolean(empty)
console.log(boolisLogin);  //true
console.log(boolnum);      //true 
console.log(boolnum2);     //false 
console.log(empty)        //fasle



//                                     ************* Operations ***********************************                                    //

