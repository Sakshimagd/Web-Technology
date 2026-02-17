// practical:2
let a = 10;
let balance = new Number(1000000000000000);
console.log(balance,typeof(balance));

console.log(balance.toString());

console.log(balance.toFixed(2));
// when precision value too long then we use this method

console.log(balance.toString().length);

console.log(balance.toLocaleString()); //by Default- indian standered
console.log(balance.toLocaleString('en-US')); 

// math
console.log(Math.abs(-4)); //4 negative value converts to positive and positiveas it is
console.log(Math.round(4.6));//4
console.log(Math.ceil(4.5)); //5 choose top values
console.log(Math.floor(4.5)); //4 choose low values
console.log(Math.min(12,13));//gives the min of two numbers
console.log(Math.max(12,34));//gives the max of two numbers

//Activity 
//math.random()
console.log(Math.random());
//It generates a random decimal number range between 0 to 1.

