let str1 = "sakshi";
console.log(str1,typeof(str1));

// string interpolation
console.log(`hello my name is ${str1}`)

let Fname = "Rob";
console.log(`my name is ${Fname}`)

const gameCount = new String("sakshi");

// String methods - Activity

//legnth()
console.log(gameCount.length);

//toUpperCase()
console.log(gameCount.toUpperCase());

//toLowerCase()
console.log(gameCount.toLowerCase());

//charAt()
console.log(gameCount.charAt(2));

//indexOf()
console.log(gameCount.indexOf('i'));

//trim()
let text = "  Hello World!  ";
let result = text.trim();
console.log(result);

//Slice
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7, 13);
console.log(part1);
let part2 = text1.slice(-4); 
console.log(part2);

//replace,replaceAll
let text2 = "I love Java";
let text3 = text2.replace("Java", "JavaScript");
console.log(text3);
let text4 = "Cat dog cat dog";
let text5 = text4.replaceAll("dog", "fish");
console.log(text5);