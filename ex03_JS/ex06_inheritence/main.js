// person - name age
// employee - name age empid 

class person {
    name;
    age;
}

class address{
    street;
    pin;
}

class employee extends person{
    empid;
    address
}

var e1 = new employee();
