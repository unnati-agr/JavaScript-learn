// array is a object
// arrays are resizable in JS
//contain a mix of different data types
//0 based indexing
//if do array copy operation it makes shallow copy
//shallow copy means share same reference-- if changes are made in copy it will reflect in original
//deep copy means do not share same reference

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //add in start
myArr.shift() //delete from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); //get converted into string

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//slice does not change the original array
//it does not include the last index

//splice change the original array
//it includes the last index provided in the range
//and change the array by removing the elements from original array
//which are there in the spliced array
