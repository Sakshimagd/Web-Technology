//Array basics
let myArr = [0,1];
console.log(`my array values : ${myArr}`);
console.log(typeof(myArr));

const arr = new Array(0,1,2);
console.log(`my arr :${arr}`);
console.log(arr[1]);

//Array methods
//1.push - add values in array
arr.push(3);
console.log(arr);

//2.pop-removes last value from array
arr.pop();
console.log(arr);

//3.unshift - it shifts all elements and added at first position
arr.unshift(9);
console.log(arr);

//4.shift - removes the first added element
console.log(arr.shift())
console.log(arr);

//5.includes - checks is that element is present in the array
console.log(arr.includes(1));

//6.indexof - gives the index
console.log(arr.indexOf(2));

console.log(arr.index());

//Activity - slice and splice diff in array

// slice() with array
let arr1 = [1, 3, 4, 7];

let slicedArr = arr.slice(1, 3);

console.log("Original array:", arr);
console.log("Sliced array:", slicedArr);

// slice() ->
// Used on arrays
// Extracts a portion of an array
// Does NOT change the original array
// Returns a new array


//splice with array ->
     // splice() is used to add, remove, or replace elements in an array and it changes the original array.

let fruits = ["apple", "banana", "mango", "orange"];
console.log("Original:", fruits);

//removes element
fruits.splice(1, 2);   // start at index 1, remove 2 items
console.log("After remove:", fruits); //[ 'apple', 'orange' ]

//add elment
let colors = ["red", "blue"];
colors.splice(1, 0, "green", "yellow");  // add at index 1
console.log("After add:", colors); //[ 'red', 'green', 'yellow', 'blue' ]

//replace elments
let nums = [10, 20, 30, 40];
nums.splice(2, 1, 99);   // replace 30 with 99
console.log("After replace:", nums); //[ 10, 20, 99, 40 ]






