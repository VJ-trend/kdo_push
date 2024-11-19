

//printing statement : 

//console.log();

console.log(100) 


//run the programe 

//extension - code runner
//terminal - node 


//how to write js code 

//syntax : 

//variable_type variable_name = value    //intialization
//console.log(value)  //declaration or printingstateent

// const a = "javascript"
// console.log(a)


//variable type 

// var  

// var a = 10 //redeclare
//      a = 5  //reassign
// console.log(a);



// // let

// let b = 30  //it can't redeclare
//     b = 20  //reassign
// console.log(b);

// // const 

// const c  =  40 // it can't redeclare    // it can't reassign
// console.log(c);


// //Datatypes :  
// //primitive datatypes  

// //string - "vijay234567" 

// var a = "javascript"
// console.log(a);
// //number - 123456 or 123.34

// var num = 12.67
// console.log(num);

// //boolean  - true or false 

// var  t = false
// console.log(t);

// //null  
// var noval = null 
// console.log(noval);

// //undefined 

// var un 
// console.log(un);

// //non-primitive datatypes 

// //array  - []

// var arr = [1,2,3,"helo",true]
// console.log(arr[3]);


// //length - starts with 1

// //index  - starts with 0

// //object - { }

// //collection of key and value pairs :  

// const obj  = {
//      //key : value 
//      name : "jai",
//      age : 23
// }
// console.log(obj);

//Operators  : 

//Arithmetic operator 

//  + add , - sub , * multiply , / div , % modulus , ** exponent ,++ increment , decrement 


var num = 2
var num2 = 5
console.log(num**num2);  


//increment  

let inc = 10 
inc++       // 10 + 1 = 11
console.log(inc);

//decrement 

// var dec = 10
// dec--
// console.log(dec);

//Assignment operator


var assn  = 10
assn*= 5  // 15
console.log(assn);


//logical operator  

//&&  => and  
//  || =>  or 
// ! => not

var a = 10
var b = 10
console.log(a!=b);



//comparsion operator 

// < lessthan , > greaterthan , <= lessthanorequal , >=greaterthanorequal

var a = 10
var   b = 10
console.log(a>=b);

//strict operator 

//loose equality   == it will only check the value it will not consider the datatype

var le =  "javascript" //number
var le2 = "Javascript" //string
console.log(le == le2);


//strict equality   ===  it will check both the values and datatypes

var sq = 10      //Testcase 1 : true
var sq2  = "10"  //Testcase 2  : false
console.log(sq === sq2);

//ternary operator  

//syntax : 

//(condition) ? "value_true" : value_false"

let age = 1000
              //true      false 
let limit = (age >= 18 && age <= 70) ?   "He is eligible to vote" : "He is not eligible to vote" 

console.log(limit);

//Task :  

//rollercoster  =  160  to 190 

//he is eligible to ride 

//he is not eligible to ride