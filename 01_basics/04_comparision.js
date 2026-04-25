// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/* the reason is that an equality check == and 
comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why line 13 null >= 0 is true and line 11 null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

//avoid these comparisions.




