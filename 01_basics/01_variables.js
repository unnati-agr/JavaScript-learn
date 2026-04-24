const accountId = 144553
let accountEmail = "unnatiraj2004@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed
 
accountEmail = "unnati@hc.com"
accountPassword = "12121212"
accountCity = "Bengaluru" //not a good practice
let accountState; //undefined
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
