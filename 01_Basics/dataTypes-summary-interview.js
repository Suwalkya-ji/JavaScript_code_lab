/* kis tarah se data ko memory me rakha or access kiya jatta h uske basis pe 2 tarah ke data types hotte h */

// 1. Primitive (7 types) (saare call by value hotte h (copy banti h))
//string,Number,Boolean,null,undefined,symbol - uniqueness,BigInt 

// what type of js?
/* JavaScript is dynamically typed.
That means the type is associated with the value, not the variable, and the type is checked at runtime. */
let data = 10.3;      // Number
data = "Dinesh";    // String
data = true;        // Boolean
const outsideTemp = null; 

console.log(data);  // true

// symbol me same value h prr ye dodo same nhi honge unique h 
const Id = Symbol(123);
const anotherId = Symbol(123);
console.log(Id == anotherId); //false




// 2. non premitive(reference) - 3types(memory ki location milti h ) - inka return type hamesha object hi aata h 
// Array , objects, Functions

const names = ["ramesh", "suresh"]; //array

// everything in curely braces is object , {} -> object literals
let obj = {
    name : "ramesh",
    age : 22,
}

// function
const myFunction = function() {
    console.log("Hello JS")
}

// for find type of variable
console.log(typeof myFunction); //functionobject - function
console.log(typeof names); // object

// read -> https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++ Memory +++++++++++++++++

// stack -> use in primitive
// heap -> use in non-primitive

// stack 
let name = "dinesh";
let anotherNmae = name;  // name ki copy milli h anotherName ko
console.log(anotherNmae); 

anotherNmae = "ramesh"; //change value in copy
console.log(name);
console.log(anotherNmae);

// heap
let userOne = {
    email : "dinesh@gmail.com",
    upi : "user@ybl",
}

let userTwo = userOne; //object ki memory ka reference milla h

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
