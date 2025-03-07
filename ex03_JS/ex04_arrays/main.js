var i =10;
var str = "hello";

var fun = () => console.log("hello");

// json
var obj ={
    name: "vijay",
    age: 10,
    fun: () => {console.log("hello");}
};
// indexd
//var arr =[];
var arr = [i, str, fun, obj];
var arr1 = new Array();

//console.log(typeof arr1);
//console.log(arr[3]);

// named array
var arr2=[];
arr2['name'] = "vijay";
arr2['age'] = 10;
arr2['fun'] = fun;

//console.log(arr2['fun']());

// object 
var arr3 = [];
arr3.push({name:"vijay",age:10});
arr3.push({name:"jai",age:10});
arr3.push({name:"ram",age:10});

console.log(arr3.length);
console.log(arr3[1].toString());

console.log(arr3[0]['name']);
console.log(arr3[0].name);