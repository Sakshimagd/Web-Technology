// javascript is a dynamic lang
// Symbol example-unique id
const anotherid = Symbol('123')
console.log(typeof(anotherid))

const id = 123;
console.log(anotherid === id);

// Array
const lang = ['c','cpp','java'];
const num = [1,2,3];
console.log(lang,num);

// Objects-key:value pair
const obj = {
    Fname : "js",
    age : "21"
}
console.log(obj.age);

// functions - block of code
// function defination,declaration,calling
// function deep study:activity1

// function declaration
const myFunction =function(){
   console.log("sakshi")
}

//Function 
//Function without Parameters
const greet = function() {
    return "Hello World!";
};
console.log(greet());

//Function with Return Value
const add = function(a, b) {
  return a + b;
};

add(4, 5);
console.log(add(4, 5));

//Function with Parameters
const multiply = function(x, y) {
    return x * y;
};

console.log(multiply(3, 7));


// practical2
// memory:the are are two types of memory stack and heap 
// stack -is used for premitive-
// heap- non premitive-object,array,function
// ex.=
let myYoutubeChannel = "SAM";
let newYoutubeChannel = myYoutubeChannel;
console.log(myYoutubeChannel);
console.log(newYoutubeChannel);

newYoutubeChannel = "pam";
console.log(myYoutubeChannel,newYoutubeChannel);

// premitive datypes are stored instack, when we assign one variable to another a copy is made so changing one does not affect another

// ex.Non-premitive
let user1 = {
    fname:"sakshi magdum",
    age :21,
    id:71
}
let user2 = user1;
user2.id = 25;
console.log(user1.id);
console.log(user2.id);
// objects are stored in heap memory when we assign one object to another variable reference is copied not the value so if we change the one both variables are changed

