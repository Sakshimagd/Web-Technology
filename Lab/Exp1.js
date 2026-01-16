// const num1 =10;
// const num1 = 20;
// console.log(num1);

// let num2 = 2;
// var num3 = 3;

// {
//     let num2 = 20;
//     var num3 = 30;
//     console.log(num2,num3);
// }
// console.log(num2,num3);

//Activity1 : display student info
let name = "Sakshi"
let PRN = "23UAM071";
let Address = "Girmal mala,a.lat"
let Marks = 90
console.log(name,PRN,Address,Marks) 
document.writeln(name,PRN,Address,Marks )

//Activity2 : check is number is even or odd
console.log("--------------------")
let num = 20;
if(num % 2 == 0){
    console.log("The number is even")
    document.writeln("The number is even <br>")
}
else{
    console.log("The number is odd")
    document.writeln("The number is odd <br>")
}

// Activity3 : check student pass or fail
console.log("--------------------")
let marks = 60;

if(marks > 45){
    console.log("Pass")
    document.writeln("Pass <br>")
}
else{
    console.log("Fail")
    document.writeln("Fail <br>")
}

//Activity4 :print numbers
console.log("--------------------")
let array = [10,11,12,13,14,15]
for (let arr of array){
    console.log(arr);
    document.writeln(arr);
}

// Activity5
console.log("--------------------")
let x = 10;
let y = x;
x = 100;
console.log(x,y);
document.writeln(x,y );

// Activity6 : connect js file with html file 