//imp - what is syn and asynchrous ,currently used
//syn - code execute line by line
//  each task wait to previous task finish blocking integer
//js is single threded and synchhronous

console.log("start");
function add(a, b){
    return a+b;
}

let result = add(1,3);
console.log(result);
console.log("End");

//this is synchronous behaviour in js - this is not used in companies

//asynchronous in js - some task take time like api call, file read,timer add ,database . js does not wait it moves to next line 
// behaviour - non  blocking
//use - faching data from server ,reading file, setimeout, api calls
//e.g 

console.log("Start");

setTimeout(() => {  
    console.log("Inside timeout");    
},2000);

console.log("End");

//js is asynchronous it waits two sec minwhile js print a after timeout 


//activity - guess the outputgame,blocking and nonblicking - 2 ex, real world application,api fetch method 

//Blocking operations block the execution thread until the task is completed, whereas non-blocking operations allow the program to continue executing while the task runs in the background.
//blocking behaviour , step by step by excute -- sync Programming 
//set time out is async waits for two seconds --- async Programming 
// Blocking Vs non Blocking - 2 e.g 
//Blocking examples:
console.log("Start");

function blockingTask() {
  for (let i = 0; i < 1e9; i++) {} // heavy loop
}

blockingTask();
console.log("End");
// -------------------------------------------------
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

console.log("End");
// --------------------------------------------------
// non Blocking examples:
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
// ---------------------------------------------
const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("End");

//  where sync and async used in reallife(company level)?
// sync :
// 1) Startup / App Initialization 
// 2)Database Migrations

//  async:
// 1)Web APIs
// 2)Database Calls
// 3)File Upload / Download

// API fetch methods
//The Fetch API is a modern JavaScript method used to send HTTP requests (like GET, POST, PUT, DELETE) to a server and receive responses.
//It is used to:
//Get data from server (GET)
//Send data to server (POST)
//Update data (PUT/PATCH)
//Delete data (DELETE)

//methods:
    //1> GET Method:
        //Used to retrieve data from a server.

    //2> POST Method
        //Used to send new data to server.

    //3>put method
        //Used to update full record.

    //4> PATCH Method
       //Used to update only specific fields.

    //5> DELETE Method
       //Used to delete data



