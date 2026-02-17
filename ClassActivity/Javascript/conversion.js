// Number to String
let num = 33;
let str = String(num);
console.log(str)

console.log( `Type of str : ${typeof(str)}`)

// String to number
let num1 = Number(str)
console.log(num1)
console.log( `Type of num1 : ${typeof(num1)}`)

console.log(Number("123"));      // 123
console.log(Number("123abc"));   // NaN
console.log(Number(""));         // 0
console.log(Number(" "));        // 0


//Boolean to String
let bool = true;

let boolStr = String(bool);
console.log(boolStr);            // "true"
console.log(typeof boolStr);     // string

//String to boolean
let boolBack = Boolean(boolStr);
console.log(boolBack);           // true
console.log(typeof boolBack);    // boolean

console.log(Boolean("Hello"));   // true
console.log(Boolean(""));        // false


//number to boolean
let n1 = 0;
let n2 = 45;

console.log(Boolean(n1));        // false
console.log(Boolean(n2));        // true

//boolean to number
console.log(Number(true));       // 1
console.log(Number(false));      // 0

//null conversion
console.log(Number(null));       // 0
console.log(String(null));       // "null"
console.log(Boolean(null));      // false

//undefined conversion
console.log(Number(undefined));  // NaN
console.log(String(undefined));  // "undefined"
console.log(Boolean(undefined)); // false


// Activity   ---> Do conversion of all data types


