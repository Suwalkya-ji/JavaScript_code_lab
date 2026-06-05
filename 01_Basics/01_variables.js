const accountId = 7789;

let accountEmail = "dinesh@gmail.com";  //block scope
var accountPassword = "23456";          // global scope

accountCity = "Jaipur";   // JavaScript creates a global variable (in non-strict mode).
let accountState;       // give undefined

// accountId = 8899;  // const is not allowed 
accountEmail = "suwalkya@gmail.com";
accountPassword = "789456";
accountCity = "Pune";

console.log(accountId);


/*
    prefer not ot use {var} because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);