//Q1 
function Add(){
    let a = 20;
    let b = 30;
    let c = a+b;
    console.log(c);
}
Add();

//Q2
function Add(){
    let a = 3;
    let b = 4;
    let c = a+b;
    console.log(c);
}
Add();

//Q3
greet = ()=> {
    console.log('Good morning');
}

//Q4
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//Q5


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//Q6
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//Q7
let num = 4; 
let fac = 1;

// num! = num * (num-1) * (num-2)... 1;
for(num; num >= 1 ; num--){
    fac = fac * num ;
    console.log(fac);
}

// Day 2 Q1

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 12));

//Q2 
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}

//Q3
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//Q4

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")