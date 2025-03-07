var obj ={
    name: "vijay",
    age: 10,
    someting: "Test"
};

var {name:a} = obj;
//console.log(a);


var {age:x, ...arr} = obj;

console.log(x);
console.log(arr);

var arr1 = [1,2,3,4,5,6];
var [p, ...qr] = arr1;

console.log(p);
console.log(qr);