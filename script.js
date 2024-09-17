/*
-> word vs keyword => 
        word = that has no meaning in javascript ==== Example -> aman, pen, book, etc.
        keyword = that has some meaning in javascript ==== Example -> console.log, alert, etc.
*/

/*
-> var let and const =>
        var and let = used to declare variables(whose value can be change) === Example -> var number, let number
        const = used to declare constants(whose value is fixed) === Example -> const number
*/

/*
-> hoisting => 
        Hoisting means use of variable before declaration because in js, declaration part always move on to the top of the code but HOISTING WORKS ONLY WHEN VARIABLE DECLARE WITH var
Example === 

console.log(num);
let num = 7;               // generate error

console.log(a);              //this will give undefined as the decalaration part move towards top so var a; move towards top and as a is not initialized so it has 'undefined' 
var a = 8;
*/

/*
-> difference between undefined and not-defined =>
        undefined = unknown (value hai par pata nhi kya hai )
        not-defined = not exists (value hai hi nhi)
*/

// console.log(a);               //this will give a is not defined
// var b;
// console.log(b);                  // this will give undefined as value is not assigned


/*
-> types in js => 
        primitive => whose value pass when copied 
                    example === Number, Boolean, Symbol, BigInt, null, undefined,String
        reference => whose reference pass when copied
                    example === {} -> objects, () -> function, [] -> Array
*/

/*
-> function => Functions are block of code that can be used whenever we want. 
                -> Functions are used when we don't want to execute our code right now but we want to execute it in future 
                -> When we want to resue our code 
                -> When we want to execute same code multiple time with different parameters/arguments.


function sayHello(){                          //function definition
    console.log("Hello aman...");
    console.log("What's going on..")
}

sayHello();                                   // function call
*/


/*
-> Arrays => Arrays are used to store multiple values at a time in a single variable 
                var a = [12,13,114,15];
                console.log(a);
*/

/*
-> Methods of array => 
                -> push() => used to add element at last 
                -> pop() => used to delete element from last 
                -> unshift() => used to add element from beginning
                -> shift() => used to delete element from starting


let a = [1,2,3,4,5,6];
console.log(a);           //1,2,3,4,5,6
a.push(7);               
console.log(a);            //1,2,3,4,5,6,7
a.pop();
console.log(a);            //1,2,3,4,5,6
a.unshift(0);
console.log(a);             //0,1,2,3,4,5,6
a.shift(0);
console.log(a);            //1,2,3,4,5,6

console.log(a.splice(3,2));            //4,5   (here 3 is starting index and 2 is the no. of terms starting from index 3)

*/

/*
-> object => Used to hold details of a single entity in key value pair.


var a = {
    name : "Aman",
    age : 21,
    email : "0786ad2000@gmail.com",
    contact : 9569065009
};

console.log(a.contact);         //9569065009
console.log(a.name);               //Aman

Access ===> a.name;
update ===> a.age = 20;

*/


/*
 -> difference between var, let and const 


            -> There are two variant of js - one is es5 and the other one is es6
            -> es5 contains var and es6 contains let and const 
            -> We are using combination of es5 and es6



var ==>
      -> in old JS
      -> function scoped
      
      -> function abcd(){
        for(var i =0;i<=5;i++){
            console.log(i);                 //0,1,2,3,4,5
        }
        console.log(i);                //6
      } 
      abcd();

      -> var adds themselves to the window object 
     
let and const ==>
        -> in new JS
        -> braces scoped
        
        -> function abcd(){
          for(let i =0;i<=5;i++){
              console.log(i);                 //0,1,2,3,4,5
          }
          console.log(i);                //error
        } 
        abcd();
  
        // -> let and const doesn't adds themselves to the window object 
        
*/


/*
-> window object ==> The window object in js is a global object that represents the browser's window or tab. It serves as the top level object in the browser environment and provides a variety of properties, methods, and events for interacting with the browser.
                    -> There are some features that we use in js but these features are not actually present in js , these features are provided by browser through window object that we used
                    -> Example ===> alert, setInterval, clearInterval, etc.

console.log(window);
*/

// -> Browser context api => Includes three terms - window object , stack , heap memory

// -> Heap memory => Heap memory used to store intermediate data while performing some operations 

/*
Execution context -> When a function call, then it makes its imaginary container that contains variables, inside functions, and lexical environment.
-> Child functions access their parent variables, but parent can't access their child's variables.
*/

/*
-> Lexical environment => Lexical environment tells about the accessibility of variables 
    -> Lexical environment is a chart that contains information about particular function that tells about the accessibility of that particular function.


// example =>
    function abcd(){             //fucntion definition
        var a = 5;
        function def(){
            var b = 7;
        }
    }

    abcd();                        //function call

==> The above example contains variable a, function def and lexical environment in its execution context

-> Lexical environment holds its scope and scope-chain.
*/

/*
-> How to copy reference values => 
    
    var a = [1,2,3,4,5,6];
    var b = a;               //direct copy  
    b.push(7);
    console.log(a);              //[1, 2, 3, 4, 5, 6, 7]
    console.log(b);            //[1, 2, 3, 4, 5, 6, 7]
    

    var c = [10,11,12,13];
    var d = [...c];            //spread operator
    d.push(14);
    console.log(c);            //[10, 11, 12, 13]
    console.log(d);              //[10, 11, 12, 13, 14]


--> same happens in object 

var obj = {
    name : "Aman",
    age : 21
};
var objCopy = obj;
objCopy.age = 20;
console.log(obj);               //{name: 'Aman', age: 20}
console.log(objCopy);           //{name: 'Aman', age: 20}

var obj2 = {
    name : "Nikhil",
    age: 24
};
var obj2Copy = {...obj2};
obj2Copy.age = 23;
console.log(obj2);             //{name: 'Nikhil', age: 24}
console.log(obj2Copy);         //{name: 'Nikhil', age: 23}

*/


/*
-> Truthy vs falsy ==> In js, values can be categorized as truthy or falsy, which determines how they are evaluated in conditional statements, loops, and other boolean contexts. 
        -> falsy => falsy are those values that evaluate to false. 
                -> false
                -> null 
                -> undefined 
                -> NaN 
                -> 0
                -> document.all 
                -> -0
                -> 0n      --> The BigInt representation of zero


if(false){
    console.log("truthy");
}
else{
    console.log("falsy");
}

        -> truthy => truthy are those values that evaluate to true. 
                  -> all except falsy



if("aman"){
    console.log("truthy");
}
else{
    console.log("falsy");
}

*/

/*
-> forEach => Used to iterate or perform some operations on each element of Array. 

Example => 

var a = [1,2,3,4,5,6];
a.forEach(function(val){
    console.log(val);              //iterate over array elemens one by one
})

*/

/*
-> forin => used for tranversing over objects. 


var obj = {
    name : "Aman",
    age : 21
};
for(var key in obj){
    console.log(key);       //give keys     
    //name 
     //age
}

for(var val in obj){
    console.log(obj[val]);     //give values   
     //Aman    
     //21
}

*/

/*

-> callback function => A callback function in js is a function that is passed as an argument to another function and is executed after some operation has been completed. This allows for asynchronous programming, enabling code to run without blocking the execution of other code. 
*/

/*

-> first class function => In js, a first class fucntion refers to the treatment of fucntions as first class citizens. This means that functions in js can be treated like any other value.
         -> Characteristics =>
                            ->1) Assigned to variables 
        
                             const aman = function () {
                                console.log("aman");
                             }
                             aman();
                             
        
                            ->2) Passed as arguments  

                            function sayName(fn) {
                               fn();
                            }

                            function aman(){
                                console.log("aman");
                            }
                            sayName(aman);

                          ->3) Returned from other functions
                             function aman(){
                                console.log("aman");
                            } 
                            function sayName(){
                                return aman();
                            }
                            sayName();
                           

                            ->4) Stored in data structures 

                              var arr = [
                                function aman(){console.log("aman")},
                                function sayHello(){console.log("Hello aman..")}
                              ];
                              console.log(arr[0]);            //print the function aman definition
                              console.log(arr[1]);             //print the function sayHello definition

                              console.log(arr[0]());         //print aman
                              console.log(arr[1]());              //print Hello aman..
  
                          
                           ->5) Anonymous functions  
                           
                                var aman =function (){
                                    console.log("aman");
                                }
                                aman();

*/

/*

-> How to check whether designed array is array or not => 
        using isArray();

        example ==>



var obj = {
    name : "aman",
    age : 21
};

var arr = [1,2,3,4,5,6];
console.log(Array.isArray(arr));                 //true
console.log(Array.isArray(obj));             //false

*/

/*

-> How to delete property from object ==>
    using delete 

example ==> 



var obj = {
    name : "aman",
    age : 21
};
delete obj.name;
console.log(obj);             //{age: 21}

*/

/*

-> Higher order function => A higher-order function is a function that either:
    => takes one or more function as arguments
    => returns a function as its result

    Characteristics =>
            -> Accepting functions as arguments
            -> Returning functions

    Examples => 
            ->array methods like reduce(), map(), filter(), forEach(), etc.

*/

/*

-> Constructor function => In js , a constructor function is a special type of function used to create and initialize objects. It acts as a blueprint for creating multiple instances of an object with similar properties and methods. 

            Characteristics => 
                -> Naming convention => Start with capital letter
                -> Using the new keyword => Use new keyword while calling the constructor function
                -> Using this keyword to within function definition;

Examples =>

   

function Biscuit(brand,shape){
    this.color = "brown";
    this.taste = "sugary";
    this.brand = brand;
    this.shape = shape;
}

Biscuit.prototype.message = function(){
    console.log(`This biscuit is of ${this.brand} brand and is ${this.shape} in shape having ${this.taste} taste`  );
}

const Biscuit1 = new Biscuit("parle","rectangular");
console.log(Biscuit1);                   //{color: 'brown', taste: 'sugary', brand: 'parle', shape: 'rectangular'}
console.log(Biscuit1.message());         //This biscuit is of parle brand and is rectangular in shape having sugary taste

let Biscuit2 = new Biscuit("GoodDay", "circular");
console.log(Biscuit2);                       //{color: 'brown', taste: 'sugary', brand: 'GoodDay', shape: 'circular'}
console.log(Biscuit2.message());            //This biscuit is of GoodDay brand and is circular in shape having sugary taste

*/ 

/*

-> new keyword => The new keyword in js is used to create an instance of a constructor function or a class. It performs several important tasks when invoked :
            -> 1) Create a new object => When you use new, it creates a new empty object.
            -> 2) Sets the prototype => The prototype of the new object is set to the constructor function's prototype property. This allows the new  object to inherit methods and properties from the constructor's prototype.
            -> 3) Binds 'this' => Inside the constructor function, 'this' is bound to the new object. This means that any properties or methods assigned to 'this' will be added to the new object.
            -> 4) Returns the object => If the constructor function does not explicitly return an object, new will return the newly created object by default. 

*/

/*

-> IIFE (Immediately invoked function expression) => An IIFE is a special js function that is defined and executed immediately after its creation. It allows for the creation of a new scope, which can help avoid polluting the global namespace and encapsulate variables.

->We can define private variables in IIFE.
-> Methods are provided for access and updation.


=> Syntax = 

    (function (){
      //body
})();



var ans = (function() {
    var privateValue = 786;
    return function getPrivateValue(){
        console.log(privateValue);
    }
})();

console.log(ans());

var result = (function(num2){
        var num1 = 5;
        var num2 = 7;

        return function getSum(){
             console.log(num1+num2);
        }
})();

console.log(result());

*/

/*
-> Prototype => -> A js object is an entity having state and behaviour(properties and methods).
                -> JS objects have a special property called prototype.
                -> Prototype is also an object.
                -> Prototype is an object that is created when we create an object and this prototype contains various methods that we use in our code to get the desired results.
                -> Prototype is a reference to an object.
                -> If object and prototype both have same method, then objects method will be used
                
-> Syntax =>

    __proto__

Example => 


    const employee = {
        calcTax(){
            console.log("tax percentage is 10");
        }
    }

    const aman = {
        salary : 50000
    };

    aman.__proto__ = employee;          //this will add the calcTax in prototype of obj aman

    console.log(aman.calcTax());      //tax percentage is 10

    console.log(aman.calcTax);          /*ƒ calcTax(){
                                            console.log("tax percentage is 10");
                                          }
                                           

    console.log(employee.salary);           //undefined

*/

/*

--> Prototypal inheritance => Prototypal inheritance is a core concept in js that allows objects to inherit properties and methods from other objects. Instead of using classical inheritance (like in languages like java or c++) , js uses a prototype based model. 

*/

/*

-> 'this' keyword => The 'this' keyword is a special identifier that refers to the context in which a function is executed. Its value can vary depending on how a function is called . 
            -> 'This' keyword's value id different in different context 


            ->1) in global scope => 

            console.log(this);                        //window


            -> 2) in function scope => 

            function abc(){
                console.log(this);              //window
            }
            abc();

            -> 3) in method scope => 

            var obj = {
                name : "aman",
                age : 21,
                sayHello : function(){
                    console.log(this);          //print the complete object obj
                }
                }
            console.log(obj.sayHello());

==> In any method, 'this' keyword always refers to parent object .    

            -> 4) in eventListener => 

            document.querySelector("button").addEventListener("click",function(){
                console.log(this);                 //<button>click me!</button>
            })

            // -> 'this' keyword is equal to whatever written before the addEventListener, in the above case 'button'

            document.querySelector("button").addEventListener("click",function(){
                this.style.color = "white";
                this.style.backgroundColor = "black";
            })

            -> 5) Constructor function => When a function is used as a constructor , this refers to the newly created object. 

            function Person(name){
                this.name = name;
            }
            const person1 = new Person("aman");
            console.log(person1.name);

            -> 6) Arrow functions => Arrow functions do not have their own 'this'. Instead, they lexically bind this, meaning they inherit this from the enclosing context where they are defined. 

            const obj = {
                name : "aman",
                greet : function(){
                    const inner = () => {
                        console.log(this);       //obj
                        console.log(this.name);   // aman
                    };
                    inner();
                }
            };
            console.log(obj.greet());


*/

/*

-> Pure and impure functions => 
    =>Pure functions => 
        -> Always return the same output for the same input 
        -> Have no side effects

example-

function add(a,b){
    return a+b;
}
console.log(add(2,3));            //5
console.log(add(2,3));            //5
console.log(add(2,3));            //5

    => Impure functions => 
        -> May return the same output for the same inputs.
        -> Have no side effects.

example-
      

    let counter = 0;

    function counterIncreament(){
        // counter += 1;
        counter++;
        return counter;
    }

    console.log(counterIncreament());
    console.log(counterIncreament());
    console.log(counterIncreament());

*/


/*

--> What is synchronous and asynchronous javascript => 

    Synchronous js => Tasks are executed one by one (ek ke bad ek)
    Asynchronous js => Asynchronous codes are executed in background without blocking the execution of subsequent code
    
    If these words are used then there will be async code -
        -setTimeout
        -setInterval
        -promises
        -fetch
        -axios
        -XMLHttpRequest
        -callbacks
        -then catch
        -async await

--> Asynchronous js => In asynchronous programming, tasks can start and run in the background without blocking the execution of the subsequent code.Js uses the event loop to manage this. Long-running tasks(like network requests) can be handled asynchronously. So the program doesn't wait for the task to complete and can continue executing other code.
         There are two stacks basically, one is main stack and second one is side stack , side stack is used to hold async code and when it completes its execution and main stack become empty then async code is brought to main stack by event loop 



console.log("hii1");
console.log("hii2");
setTimeout(function(){
    console.log("hii in async");
},2000);



===> JS is not asynchronous
===> JS is single threaded

*/

/*

--> Callbacks => A callback is a function passed as an argument to another function.

Example =>


function sum(a,b){
    console.log(`sum is ${a+b}`);
}

function calculator(a,b,sum){
    sum(a,b);
}
calculator(2,3,sum);

const hello = () => {
    console.log("Hello");
};
setTimeout(hello, 3000);





// console.log(2+2 + "is equal to "+  2*2 + "and also equal to " + 4*1);
// console.log(`${2+2} is equal to ${2*2} and also equal to ${4*1}`);

--> Callback Hell => Nested callbacks stacked below one another forming a pyramid structure (Pyramid of DOOM).
This style of programming becomes difficult to understand and manage.
-> If we want to execute one code first then only second instruction then,



function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data ", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1,() => {
    getData(2,() => {
        getData(3);
    })
})




-->==> To resolve callback hell, we use promises

*/

/*

-->Promises ==> In js, promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
                They provide a way to handle asynchronous operations more effectively than traditional callback functions, allowing for cleaner and more manageable code.

        States ==> 1) = Pending
                   2) = Fulfilled (resolve)
                   3) = Rejected

        Methods ==> 1) = promise.then((res) => {}) (on resolve)
                    2) = promise.catch((err) => {}) (on reject)



let promise = new Promise((resolve,reject) => {

})

===> resolve and reject are callbacks appointed by js


let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    resolve("Promise fulfilled");
    // reject("some error occured");
})

console.log(promise);




function getData(dataId,getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}



const getPromise = () => {
        return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("resolved");
        // reject("rejected");
    });
    
}

let promise = getPromise();
promise.then((res) => {                     //res is automatic parameter of then in this scenario, res contains resolved
    console.log("Promise fulfilled",res);
});
promise.catch((err)=>{                    //err is automatic parameter of catch in this scenario, err contains rejected
    console.log("some error occured",err);
})

*/

/*

--> Promise chain => 



function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(" data1");
            resolve("success");
        }, 4000);
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(" data2");
            resolve("success");
        }, 4000);
    })
}


//Promise chaining

// console.log("Fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     // console.log(res);
//     console.log("Fetching data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         // console.log(res)
//     })
// });

console.log("Fetching data1 in simpler way");
asyncFunc1().then((res) => {
    console.log("Fetching data2 in simpler way");
     asyncFunc2().then((res)=>{

    })
})




// callback hell 

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1,() => {
//     getData(2,() => {
//         getData(3);
//     })
// })


// promise chaining 

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}

getData(1).then((res) => {
     getData(2).then((res)=>{
         getData(3).then((res) => {
            
        })
        
    })
})




// Actual promise chaining

function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{

});

*/

/*

--> Async-Await ==> async function always returns a promise.
                    async function myFunc(){...}

====> await pauses the execution of its surrounding async function until the promise is settled
      await can be used only within async function

Example ==>


function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather information");
            resolve(200);               //200 means successful api call
        }, 2000);
    });
}

async function getWeatherInformation(){
    await api();
       await api();
}



function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 1000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

getAllData();

*/

/*

--> IIFE (Immediately Invoked Function Expression) ==> It is a function that is called Immediately as soon as it is defined



        (async function (){

             //body

        })();


Example ==>

  
 
function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 1000);
    });
}

 (async function (){
    await getData(1);
    await getData(2);
    await getData(3);

})();

*/



/*


--> concurrency => Concurrency in js refers to the ability to manage multiple tasks at the same time , even though js itself is single-threaded. This means that while   js can only execute one piece of code at a time, it can handle multiple tasks by using async programming techniques.

*/

/*

--> Parallelism => Parallelism in js refers to the ability to execute multiple operations or tasks simultaneously , which can lead to improved performance and responsiveness, especially in applications that perform heavy computations and handle multiple async operations

*/

/*

--> Throttling => Throttling in js is a technique used to limit the number of times a function can be executed over a certain period.

*/