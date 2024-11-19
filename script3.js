//printing statement :

//console.log()

// console.log("javascript")

//extension : code runner
//terminal  : node "filename"

// how to write the js code :

//syntax :

//variable_type variable_name  = value
//console.log(value)

// const a = 10
// console.log(a);

//variable types :

//var

// var a = 10   //redeclare
//     a = 5    //reassign
// console.log(a);
// //let

// let b = 20   //it can't redeclare
//  b = 25      //reassign
// console.log(b);

// //const

// const c = 10  //it can't redeclare
// console.log(c); //it can't reassign

// //Datatypes :

// //prmitive datatypes:

// //string  -"1234567!@#$qwertyui"

// const str  = "@#$%DFGHJ"
// console.log(str);

// //number - integers & decimal values

// const num = 10.23
// console.log(num);

// //boolean  - true or false
// //null

// const store = null    // initalization
// console.log(store);   //declaration or printing statement

// //undefined

// // const noval
// // console.log(noval);

// //non - primitive datatypes

// //array - []

// const arr = ["sunday","monday",true,null,23,123.1]

// console.log(arr[2]);

// //object -{ }

// //collection of key and value pairs :

// const obj = {
//      //key :  value
//      name : "hari",
//      age  : 25,
//      dep : "IT"

// }
// console.log(obj);

// //operator :

// //arithmetic
// //assignment
// //comparsion
// //logical
// //strict  , == double equals , ===  triple equals
// //ternary operator :

// //syntax :

// //(condition) ? "value_true" :  "value_false"

// let  age = 1000

// let limit = (age >= 18 || age<=70) ? "HE IS ELEIGIBLE TO VOTE" : "HE IS NOT ELEIGIBLE TO VOTE"

// console.log(limit);

// //logical operator :

// // && => and
// // || => or
// // ! => not

//function :

//Function is a block of code where we can store the multiple values

//Types of Function
//function statement or declaration

//syntax :

//function var_name(){
//code
//}
//var_name()

// function box(){

//  console.log("Hello im function");

// }

// box()

//parameter & arguments :

// function box(x){   //parameter is like an variable_name

//     console.log(x);

// }
// box("hello im javascript") // arguments  is like an value

//return - keyword

// function box2(y){

//      return y
// }

// first method
// console.log(box2(10))

//second method

// const rtn  = box2("Happy")
// console.log(rtn);

//Task :
//ternary operator => inside the function => value should pass in parameter and arguments

//Arrow function :

// //syntax :

// //()=>{ //code }

// // const arr = (x,e)=>{console.log(x,e)}
// // arr("JS","js2")

// //Task :

// //o/p :
// //"hello [name] goodmorning"

// // const arr = (x) => {console.log("hello "+x+" goodmorning")}
// // arr("gopal")

// //Loop

// //for loop
// //syntax :

// //for(initalization ;  condition ; iteration [increment or decrement]){

// //}

// // for(let i = 0 ; i < 5 ; i++){

// //      console.log(i);

// // }
// //step 1 : i = 0 => 0<5[true] => print : 0  => 0++ = 0+1 = 1
// //step 2 : i = 1 => 1 < 5 [true] => print : 1 => 1++ = 1+1 = 2
// //step 3 : i = 2 => 2 < 5 [true] => print : 2 => 2++ = 2+1 = 3
// //step 4 : i = 3 => 3<5[true] => print : 3 => 3++ = 3+1 = 4
// //step 5 : i = 4 => 4<5[true] => print : 4 => 4++ = 4+1 = 5
// //step 6 : i = 5 => 5<5[false] => Loop will stop

// //reverse :

// for(let i = 5 ; i>=0 ; i--){
//     console.log(i);

// }

// //string loop  :

// let str = "Javascript"
//                     // 10
// for(let i = 0 ; i < str.length ;i++){ //0++ = 1

//      console.log(str[i]); //str[1] //j
//       //a

// }

// //Task :
// //reverse  - t
// //p
// //i
// //r
// //c
// //s
// //a
// //v
// //a
// //j
// // horizontal  - key

// //while loop

// //syntax :
// //Var_type var_name = value
// //while(condition){

//     // console.log()

//     //iteration [increment / decrement]
// //}

// var count =  0  //initalization
// while(count < 5){  //condition

//     console.log(count);  //print

//     count++ //iteration

// }

//task :  reverse

//do - while loop

//syntax :

//var_type var_name = value

//do{
//console.log()
//iteration[increment / decrement ]
//}
//while(condition)

// let docount = 1000
// do{
//     console.log(docount);
//     docount++

// }while(docount<5)

// //Arraymethods :

//push :

// let ps = ["jai","gopal","kali","hari"]

// ps.push("santhosh","nithish")

// console.log(ps);

// //pop

// ps.pop()
// ps.pop()

// console.log(ps);

//unshift

// let ro = ["jai","gopal","kali","hari"]

// ro.unshift("santhosh")

// console.log(ro);

// //shift
// ro.shift()
// console.log(ro);

// //concat :

// let fruits = ["apple","pineapple","iceapple"]

// let veges = ["carrot","potato","cucumber"]

// let cosomo = ["powder","scent"]

// let cover = fruits.concat(veges,cosomo)

// console.log(cover);

//sort :

// let num = [10,8,4,5,2,1,7,9,3,6]

// num.sort((a,b)=>b-a)

// console.log(num);

// let alpha = ["Chandru","anbu","vimal","Kathir","Logan"]

// alpha.sort()

// console.log(alpha);

//split

//string => array

// let str = "Good Morning shiva how are you"

// let store = str.split(" ")

// console.log(store);

// //join
// //array => string
// let join =  store.join("-")
// console.log(join);

//reverse :

// let str = "annanagar"

// let rev = str.split("").reverse().join("")

// console.log(rev);

//slice

// let birds = ["pigeon","parrot","eagle","peacock","vulture"]

// let cut = birds.slice(2,-2)

// console.log(cut);

//splice :
//syntax :
//var_name.splice("index",counter,"value")

//0 => values push

//1 => overirde the valuess

// let weeks = ["sunday","Monday","wednesday","Thursday","saturday"]

// weeks.splice(2,1,"Tuesday")

// console.log(weeks);

//touppercase :

// var str = "chennai"
// var up = str.toUpperCase()
// console.log(up);

// //tolowercase

// var str2 = "CHENNAI"
// var low = str2.toLowerCase()
// console.log(low);

// //include

// var inc = "javascript"

// var store = inc.includes("ipt")

// console.log(store);

// //indexof :

// let newval = "annanagar"  //first occurence

// let io = newval.indexOf("a")

// console.log(io);

// //lastindexof :

// let newval2 = "annangar"   //last occurenece

// let io2 = newval2.lastIndexOf("a")

// console.log(io2);

//object : collection of key and value pairs { }

// let obj = {

//   name : "jai",
//   age : 23

// }

// const key = Object.keys(obj)
// console.log(key);

// const value = Object.values(obj)
// console.log(value);

// obj.name = "santhosh"

// console.log(obj);

// console.log(obj.name);
// console.log(obj.age);

// Nested array and object :

// let ofcobj = [
// {

//      name : "praveen",
//      dep : "IT",
//      exp : 4 ,
//      domain : "QA tester",
//      office : "Amazon"

// },
// {

//     name : "abhishek",
//     dep : "IT",
//     exp : 4 ,
//     domain : "Fullstack",
//     office : "Google"

// },
// {

//     name : "jai",
//     dep : "IT",
//     exp : 4 ,
//     domain : " Front end",
//     office : "Salesforce"

// },

// ]
// console.log(ofcobj[1].office);

//students object  - 5 data  => 1.  1 index 3 index data print  2. 2 index [name ,std] => update  3.4 index keys and values

//object destructuring :

// let obj2 = {

//      name : "hari",
//      dep : "it",
//      exp :  3
// }

// let {name,dep,exp} = obj2

// console.log(name,dep,exp);

///nested array and object
//create a two object [2nd object values destructure]

//formethods :

//foreach : It is used to read an array
//syntax :
//var_name.forEach((value,index,acctualarray)=>)

// let arr = ["sunday","monday","Tuesday","wednesday","thurday"]
// arr.forEach((val,idx,accarr)=>console.log(val,idx,accarr))

//forin  => used to read an object

//syntax :

//for(var_type var_name in Obj_name){
//code
//}
// let obj = {
//    name : "sathish",
//     country : "London"
// }
// for(var x in obj ){

//      console.log(obj[x]);

// }
// o/p
//name <=> hari
//country <=> india

//forof  => string or array

//syntax :

//for(var_type var_name of str_name){

//}

// let str = "javascript"

// for(let x of str){
//     console.log(x);

// }

//this :

// const obj = {

//      name : "sakthi",
//      age : 22 ,
//      details : function(){
//         console.log(this.name);

//      }
// }

// obj.details()

//string literals : `${}`

// let a = "vijay"
// let b = "how are you"
// // console.log("Hi"+a+b+"Today");

// console.log(`hi ${a} ${b} Today `);

//constructor : it retuns the object
// function Std(name,age,bgrp){

//       // key           //values
//     this.studentname = name
//     this.age = age
//     this.blood = bgrp
//     this.stddetails = function(){
//         console.log(`the name is ${name} and the age is ${age} blood group ${bgrp}`);

//     }

// }
// //new => object create and use
// const details = new Std("jai",15,"b+")
// console.log(details);
// details.stddetails()

// //Class : is like bluprint of constructor .it is also returns the object

// class Studentdetails {

//      constructor(name,age,std){

//          this.studentname = name
//          this.studentage = age
//          this.standard = std
//      }

//      stddetails(){

//          console.log(`the name is ${this.studentname} and the age is ${this.studentage} and the std ${this.standard}`);

//      }

// }

// const det = new Studentdetails("kishore",12,6)
// console.log(det);
// det.stddetails()

//settimeout

//syntax

// setTimeout(()=>{

// },timer)

// setTimeout(()=>{
//     console.log("hi im executed");

// },3000)

//callback : passing the function to the another functions arguments is called callback function

// function name(x){

//     console.log("vijay");
//     x()

// }

// function greets(){

//     console.log("Goodmorning");

// }

// name(greets)

//asynchnorised
// function task1(a) {
//   setTimeout(() => {
//     console.log("Task1");
//     a()
//   }, 4000);
// }

// function task2(b) {
//   setTimeout(() => {
//     console.log("Task2");
//     b()
//   }, 2000);
// }

// function task3(c) {
//   setTimeout(() => {
//     console.log("Task3");
//     c()
//   }, 500);
// }

// function task4() {
//   setTimeout(() => {
//     console.log("Task4");

//   }, 1000);
// }

// //callback hell - synchronoised
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4()
//         })
//     })
// })

//Promise :

//TO overcome the callback hell concept

//syntax

// new Promise((resolve,reject)=>{

// })

//arun

// 1. watercan  - 5000

//2.room clean  - 2000

//3.trash out  - 500

//.then() => for resolve

//.catch() => for reject

function watercan() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filled = true;
      if (filled) {
        resolve("water can is filled");
      } else {
        reject("water can is not filled");
      }
    }, 5000);
  });
}

function roomcleaning() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rooms = true;

      if (rooms) {
        resolve("room is cleaned");
      } else {
        reject("room is not cleaned");
      }
    }, 2000);
  });
}

function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const out = false;
      if (out) {
        resolve("trash is out");
      } else {
        reject("trash is not kept outside");
      }
    }, 500);
  });
}

// watercan().then(value1 => {console.log(value1); return roomcleaning()})
// .then(value2 => {console.log(value2);return trash()} )
// .catch(error => {console.log(error);})

//async / await :

// async  - it returns promise
//await  -  it will wait for promise

// async function allwork() {
//   try {
//     const bottles = await watercan();
//     console.log(bottles);

//     const clean = await roomcleaning();
//     console.log(clean);

//     const garbage = await trash();
//     console.log(garbage);
//   } catch (error) {
//     console.log(error);
//   }
// }

// allwork();


//if else ; 

//else if : 

// let age =  10 

// if(age>=18){
//     console.log("he is eligible to vote");
    
// }else{
//     console.log("he is not eligible to vote");
    
// }


// let mark = 49 

// if(mark >= 90 && mark <=100){  //false

//     console.log("Grade A");
    
// }else if(mark>=80){ //false
//     console.log("Grade B");
    
// }else if(mark >= 70){ //false
//     console.log("Grade C");
    
// }else if(mark >= 60){ //false
//     console.log("Grade D");
    
// }else if(mark >= 50){ //false
//     console.log("Grade E");
    
// }else{
//     console.log("Fail");
    
// }

//task :  


// shareauto   
// 8 => "auto will move"
// less than 8 => wait for passengers
//greater than 8 => "drop the passengers"