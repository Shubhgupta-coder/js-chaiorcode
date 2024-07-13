// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// in case of < , > , <= and >= it wil take null as 0 
console.log(null > 0);  //false
console.log(null == 0);  //In JavaScript, when you use the == (loose equality) operator to compare null and 0, the result is false. This is because null is only loosely equal to undefined, not to other falsy values like 0.
console.log(null >= 0); //false 

// undefined always gave false on comparision
console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined < 0);


console.log(null == undefined)  // it will gave true    
// === 

console.log("2" === 2);  // check both data type and val