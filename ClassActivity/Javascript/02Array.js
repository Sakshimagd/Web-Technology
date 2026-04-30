const superHeros = ["Spiderman","thor","batman","Captain America"];
const lang = ["c","cpp","java"];
superHeros.push(lang);
console.log(superHeros);

console.log(superHeros[4]);
console.log(superHeros[4][2]);

//array concate
const arr1 = superHeros.concat(lang);
console.log(arr1);

//nested array
const arr2 = [1,2,3,[4,5,6],7,8,[6,7,[4,5]]];
console.log(arr2);

//how deep a nested array should be flated default value is 1
//infinity -flattence all level no matters how
//flat does not change the original array it returns the new ayay useful when working with nested data
const arr3 = arr2.flat(Infinity);
console.log(arr3);

const arr4 = arr2.flat(1);
console.log(arr4);

//data scriting using this methods
// check given value is array or not
console.log(Array.isArray("sakshi"))
console.log(Array.isArray(arr4))

//from - convet an interable object like string,set,map into an array
console.log(Array.from("sakshi"))

console.log(Array.from({"name":"sakshi"}))

console.log(Object.keys({"name":"sakshi"}));

console.log(Object.values({"name":"sakshi"}));

console.log(Object.entries({"name":"sakshi"}));

let score1 = 100;
let score2=200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))//create new array from given value no matters how many
// interview question = diff bet
// Array.of - converts values
//Array.from - converts Ietator

////Assignment array, string, object, function...
//map filter reduce