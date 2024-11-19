//Constructor :  

// it is also going to return object .





//this 


const obj = {
 
     name : "vijay",
     dep : "IT",
     details : function(){
        console.log(this.dep);
        
     }

} 


obj.details() 


//constructor :   

//new keyword -  it is used to create an object  
   //          - it is used to help on working in the predefined objects

function  Bike(name,year,model){

    //key    :     value  
    this.Bikename = name  //Yamaha
    this.Bikeyear = year   // 1999
    this.Bikemodel = model  //RX100
    this.fulldet = function happy(){
        console.log(`the bike name is ${name} and the year is ${year} and the model is ${model}`);
        
    }
} 
let details = new Bike("Yamaha",1999,"RX100") 
console.log(details);
details.fulldet()
//task : 
//student obj :  - 3 datas
// name 
// age 
//std  
//blood grp 







//template literals :  `${ }`

// var a = "vijay"
// var b = "how are you"
// // console.log("hi "+a+b+" today");
// console.log(`hi ${a} ${b}  today`);


