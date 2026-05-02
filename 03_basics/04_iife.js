// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})(); //use semicolon
// chai()

//sometimes due to global scope there is pollution to remove
//that we use iife

((name) => {
    //unnamed iife
   console.log(`DB CONNECTED TO ${name}`);
   
})('unnati')

