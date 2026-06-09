const name = "dinesh";
const id = 24;

// old way
// console.log(name + id + "value");

//use this-modern way ->use backticks with placeholders
console.log(`Hello my name is ${name} and my id ${id}`);

// 2nd way to intialize string -> using new keyword -> isse object use hotte h JS ke
const gameName = new String('din-esh'); // it returns a object with key value pair

console.log(gameName[0]); //access key 0 -> d (value)

console.log(gameName.__proto__); // access prototype (prototype means funtions(methods) of string);

// directly use methods or function (no need to -> "__proto__" )
console.log(gameName.length);

console.log(gameName.toUpperCase()); //but it not change actual value because of pass by value

console.log(gameName.charAt(2)); // find which index can have what character 

console.log(gameName.indexOf('n')); //find char ka index find karta h

const newstr = gameName.substring(0,4); //-ve value not allowed ignore and start with 0
console.log(newstr);

const newstr2 = gameName.slice(-2,3);
console.log(newstr2);

const newstring3 = "    dine   ";
console.log(newstring3.trim());

const url = "https://dinesh.com/%20/suwalkya";
console.log(url.replace('%20', '-'))
console.log(url.includes('find'));

// convert string into array
const stt = "dinesh-suwalkya-software-developer";
console.log(stt.split('-'));

// Read string and more methods from MDN

