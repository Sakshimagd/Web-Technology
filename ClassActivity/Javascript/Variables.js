// let,const,var

//Datatypes ->
   //1>Premitive - num , Boolean ,string, begin, null, undefined, symbol
   //2>Non-premitive - Object

//let,const,var -> 

//const - const cannot be changed,its value is fixed
//diff between let and var - var is used by old developers and let is used in modern formate.The bug in var is that if in scope we changed the value of any variable and if we print both the numbers ,the number outside the scope and the updated number inside the scope for the value of number outside scope as well var considers the upated value but that updation is only restricted to that scope only.

const num1=10;
const num1 = 20;
console.log(num1);

//diff bet var and let
var num1 = 10;
num1 = 100;
let num2 = 20;
num2 = 200;

console.log(num1);
console.log(num2);

// scope
var a = 10;
let b = 20;

{
    var a = 100;
    let b = 200;
    console.log(a,b)

}
console.log(a,b);

//undefined and null
//undefined is the default value given by JavaScript when a variable is declared but not assigned a value,
//null is an intentional value assigned by the programmer to represent the absence of an object or value.
