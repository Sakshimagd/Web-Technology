
// Activity - create an array ,fun,object and print
// Activity2 -reverse number
// check number palindrome
// fibonesis series
// find largest elemet in array
// remove duplicate element in array
// find mising number in array
// reverse a string
// count vowels in string
// check palindrom in string
// check prime number
// factorial number
// function to find even or odd
// fun to fing sum of array
// 

//Activity1 : create an array ,fun,object and print
console.log("Activity1 : create an array ,fun,object and print");

// 1.Array
let arr = [11, 12, 13, 14, 15];
console.log(`Array: ${arr}`);

//2.function
function fun(){
   console.log("this is a function");   
}
console.log(fun());

//3.object
let info = {
    fname : "sakshi",
    age : 21,
    course : "aiml"
}
console.log(info);
console.log("-----------------------------");


// Activity2: reverse number
console.log("Activity2: reverse number");
let num = 12345;
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}

console.log("Reversed number:", rev);
console.log("-----------------------------");

// 3.Number palindrom
console.log("Activity3 : Number palindrom");

let num1 = 12345;
let rev1 = 0;

while (num1 > 0) {
  let digit = num1 % 10;
  rev1 = rev1 * 10 + digit;
  num1 = Math.floor(num1 / 10);
}

if(num1 == rev1){
    console.log("Palindrome number");    
}
else{
    console.log("Not a palindrome number");
    }
console.log("-----------------------------");

// Activity 4 : fibonacci series
console.log("Activity 4 : fibonacci series");

function fibonacci(n){
 let a = 0;
 let b =1;
 console.log(a);
 console.log(b);

 for(let i = 3; i <= n; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    
 }
}
fibonacci(7)
console.log("-----------------------------");

// Activity5 : find largest elemet in array
console.log("Activity5 : find largest elemet in array");

let nums = [5, 9, 2, 15, 6];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}

console.log("Largest:", max);
console.log("-----------------------------");

// remove duplicate element in array
console.log("Activity6 : remove duplicate element in array");

let arrDup = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < arrDup.length; i++) {
  if (!unique.includes(arrDup[i])) {
    unique.push(arrDup[i]);
  }
}

console.log(unique);
console.log("-----------------------------");

//Find missing number in array
console.log("Activity7 : Find missing number in array");

let arrMiss = [1, 2, 4, 5];
let n1 = 5;
let expectedSum = (n1 * (n1 + 1)) / 2;
let actualSum = 0;

for (let i = 0; i < arrMiss.length; i++) {
  actualSum += arrMiss[i];
}

console.log("Missing number:", expectedSum - actualSum);
console.log("-----------------------------");

// reverse a string
console.log("Activity8 : reverse a string");

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);
console.log("-----------------------------");

// count vowels in string
console.log("Activity9 : count vowels in string");

let s = "javascript";
let count = 0;
let vowels = "aeiouAEIOU";

for (let char of s) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log("Vowels:", count);
console.log("-----------------------------");

//Check palindrome in string
console.log("Activity10 : Check palindrome in string");

let st = "madam";
let revStr = st.split("").reverse().join("");

console.log(st === revStr ? "Palindrome" : "Not Palindrome");
console.log("-----------------------------");

//Check prime number
console.log("Activity11 : Check prime number");

let p = 7;
let isPrime = true;

if (p <= 1) isPrime = false;

for (let i = 2; i <= Math.sqrt(p); i++) {
  if (p % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");
console.log("-----------------------------");

//Factorial number
console.log("Activity12 : Factorial number");

let factNum = 5;
let fact = 1;

for (let i = 1; i <= factNum; i++) {
  fact *= i;
}

console.log("Factorial:", fact);
console.log("-----------------------------");

//Function to find even or odd
console.log("Activity13 : Function to find even or odd");

function evenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOdd(10));
console.log("-----------------------------");

//Function to find sum of array
console.log("Activity14 : Function to find sum of array");

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));




 
 




