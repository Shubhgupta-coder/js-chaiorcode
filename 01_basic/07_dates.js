let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());



// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


let timeStamp  = Date.now();
console.log(timeStamp);      //milli second m result deti h ye
let timeStamp2 = myCreatedDate.getTime();
console.log(timeStamp2);         //it will also give timeStampp 

// TO GET SECONDS  ->divide by 1000
console.log( Math.floor(Date.now()/1000))

let newdate =  new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);   // it wil start month and day form 0 based index so we add 1

// we can customize local strin
newdate.toLocaleString('default',
    {
        weekday:'long',
        month:'long'
    }
)
console.log(newdate.toLocaleString());