// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object k andar object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// object conactination
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //yhaa pr obj1 target h or obj 2 source idhar conact hokr result obj1 m hi jaaata h 
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //yhaa pr {} target h or obj1, 2 , 4 source idhar conact hokr result {} m hi jaaata h 

// spread operatoe
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //find key
// console.log(Object.values(tinderUser)); //find value
// console.log(Object.entries(tinderUser)); //yaha pr hr ek key value pair ka ek alg hi array bn jaata j

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //yaha pr hm check krre h ki ye key h ya nhu


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


function solve(...val)
{
    return val;
}

console.log(solve(1,2,3,4))