// IIFE

function print(){
    console.log("pring message");
}


(function print(){
    console.log("pring message");
})();

// arrow function -> lambda funtion 

const fun = ()=>{
    console.log("hello");
}

function printme(myfunction){
    myfunction();
}

printme(print);
printme(() => console.log("hello from printme"))