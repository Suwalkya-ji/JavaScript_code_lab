// console.log(2 > 1);    //true
// console.log(2 >= 1);   // true
// console.log(2 < 1);     //false
// console.log(2 == 1);    //false
// console.log(2 != 1);    //true


// ************ javascript convert string into number than compare
// console.log("2" > 1) //true - js convert '2' in number
// console.log("02" > 1) //true - js convert '02' in number


// The reason is that an equality check == and comparisons > < >= <= work differently
// comparisons convert null to a number, treating it as 0. that's why(3rd) null >= 0 is true and (1st) null > 0 is false

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true

// all false
console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined < 0);

//  "===" strict check (check value and data type both)
//  "==" check value
console.log("2" == 2) // true
console.log("2" === 2) // false

