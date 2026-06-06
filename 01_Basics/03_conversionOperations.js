let score1 = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = "dinesh";

console.log(typeof score1);  // -> string
console.log(typeof score2);  // -> string
console.log(typeof score3);  // -> object
console.log(typeof score4);  // -> undefined
console.log(typeof score5);  // -> string


// conversion me hamesha data types ko capital se start karte h

// ye sab convert ho jayege number me but actually me ye number nhi hotte
//1. number me convert karne ke liye (Number)
let val1 = Number(score1); // isko chood ke
let val2 = Number(score2);
let val3 = Number(score3);
let val4 = Number(score4);
let val5 = Number(score5);

// sabka type number ayega -> but ye sab NAN honge
console.log(typeof val1);  // ye number hoga bss
console.log(typeof val2);  
console.log(typeof val3);  
console.log(typeof val4);  
console.log(typeof val5);  

// ye Actually me not a number hotte h -> java script me strict check nhi hotta isliye hotte h 
console.log( val1);  // 33
console.log( val2);  // NaN
console.log( val3);  // 0
console.log( val4);  // NaN
console.log( val5);  // NaN

// notes
// "33" -> 33
// "33abc" -> NaN
// true -> 1; false ->0


//2.  convert in boolean -> (Boolean)
let isLogedIn = 1;
let booleanIsLogedIn = Boolean(isLogedIn);
console.log(booleanIsLogedIn);

// 1 -> true; 0 -> false
// "" -> false
//  "dinesh" -> true

// 3. convert in string
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);  // -> 33
console.log(typeof stringNumber); // -> string



// ******************* Operations  ************* 
let val = 3;
let negValue = -val;
console.log(negValue);

// +,-,*,%,/
console.log(2**3); // 2 to the power 3

let str1 = "Hello";
let str2 = " Dinesh";
let str3 = str1+str2;
console.log(str3);

// number + number  => addition
// anything + string => string concatenation
console.log("1" + 2);  // 12 
console.log(1 + "2");  // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2"); // 32

