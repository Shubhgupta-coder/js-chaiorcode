const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// it wil push new arrray as an element
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // return a new array
// console.log(allHeros);


// spread operators
// here it spread individual array element
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// it will gave all element in another_array case
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  // check whehther it is array or notn 
console.log(Array.from("Hitesh"))     // convert string into array
console.log(Array.from({name: "hitesh"})) // interesting  // gava an empty array

let score1 = 100
let score2 = 200
let score3 = 300

// get array form elements
console.log(Array.of(score1, score2, score3));