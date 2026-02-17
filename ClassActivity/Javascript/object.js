//IMP 
// ***Interview level points

let myobj = {
    name : "sakshi",
    age : 21,
    location : "a.lat",
    emailId : "magdumsakshi4578@gmail.com",
    isLogin : true,
    loginDay : ["Monday", "Tuesday", "Wednesday"],
    "fullName" : "sakshi magdum",//it is bad practice
    //[mySymbol] : "key1"
}

//Declaration types of objects
//1 : objet Literals => key-value pair
//2 : constructor
//3 :Singleton
//When you create constructor it create singleton object, it means itself object.
//When we create object literals singleton object in does not created.

console.log(myobj.emailId);
console.log(myobj.fullName);
console.log(myobj);
//console.log(typeof(myobj.mySymbol));

//Symbol ex : 
const mySymbol = Symbol("key1");
const myObj1 = {
    [mySymbol] : "sam"
}
console.log(myObj1);
console.log(typeof(myObj1));

myobj.emailId = "magdumsakshi4578@gmail.com"
console.log(myobj.emailId);

//Object.freeze(myobj);//to freeze object so no one can change or that obect is get immutable.

myobj.emailId = "sanjana@gmail.com";
console.log(myobj.emailId);

myobj.greeting = function(){
    console.log("hello JS");
}
console.log(myobj.greeting());