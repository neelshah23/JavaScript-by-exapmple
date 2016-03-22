/**
 * Created by root on 22/3/16.
 */

var obj1 = {num: 2};
var obj2 = {num: 3};



//common method to object(s)
addNumber = function(a){
    return this.num + a;
};

//javascript call() method
console.log("call() method with obj1 = " + addNumber.call(obj1,1));
console.log("call() method with obj2 = " + addNumber.call(obj2,2));


//javascript apply() method
console.log("apply() method with obj1 = " + addNumber.apply(obj1,[1]));
console.log("apply() method with obj2 = " +addNumber.apply(obj2,[2]));

//call() and apply() methods are exactly same. But, main difference is call() method take simple parameter list and apply() method took parameter list "array". Although they will produce same result


//javascript bind() method
var a = addNumber.bind(obj1);
console.log("bind() method with obj1  = "+a(1));