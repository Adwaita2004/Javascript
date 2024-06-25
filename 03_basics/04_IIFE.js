//Immediately invoked function expressions

(function chai(){ //named IIFE
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`) //named IIFE
})()
