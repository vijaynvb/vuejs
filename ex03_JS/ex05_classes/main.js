// es 6 class 

class Person{
    //name="vijay";
    //age =10;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static method(){
        console.log("hello from static");
    }
    print(){
        console.log("hello");
    }
}

var p = new Person("vijay",10);
Person.method();
console.log(typeof p);


// es5 

function personfun(name, age){
    this.name = name;
    this.age = age;
}

personfun.prototype.print = function(){
    console.log("hello");
}

var fun = new personfun("vijay", 10);
console.log(typeof fun);