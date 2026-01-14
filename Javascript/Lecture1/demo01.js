// let,const,var
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

