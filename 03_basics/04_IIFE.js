// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`db connected`);                    // IIFE helps in maintaining a clean global scope by encapsulating code within a function that is immediately executed.
})();


( (name) => (
    console.log(`db connected ${name}`)
))(`hitesh`)


