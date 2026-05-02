// var c = 300
let a = 300

if(true){
   let a = 10
   const b = 20
   // console.log("INNER: ",a);
   
}

// for(let i = 0;i<Array.length;i++){
//     const element = array[i]
// }


// console.log(a);
// console.log(b);
// console.log(c); //will get printed

//global scope in node and windows is different

//nested scope

function one(){
   const username = "unnati"

   function two(){
      const website = "youtube"
      // console.log(username);
      
   }
   // console.log(website);
   
   two()
}
// one()

if(true){
   const username = "unnati"
   if(username === "unnati"){
      const website = " youtube"
      // console.log(username + website);
      
   }
   // console.log(website);
   
}
// console.log(username);


//++++++++++interesting+++++++

console.log(addone(5)); // will get printed
function addone(num){
   return num + 1
}

console.log(addTwo(5)); //will give error
const addTwo = function(num){
   return num + 2;
}

