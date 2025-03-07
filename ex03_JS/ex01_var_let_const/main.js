// Web Solution UI - Browsers
// bowsers ->  window -> document 
// nodejs -> global -> process

//console.log(global, process); // works
//console.log(window); // doesnt work in nodejs 

const PI = 3.14;

let b= 0;

// blocks 

{
    var a=10
    console.log(a);
}
console.log(a);