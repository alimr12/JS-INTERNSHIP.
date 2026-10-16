console.log("DAY 6: STRING METHODS");

// Example 1: Length
console.log("EXAMPLE 1: LENGTH");
let name1 = "Ali";
console.log(name1.length);

let city1 = "Lahore";
console.log(city1.length);

let word1 = "Apple";
console.log(word1.length);


// Example 2: charAt()
console.log("EXAMPLE 2: CHARAT");
let name2 = "Ahmed";
console.log(name2.charAt(0));

let word2 = "School";
console.log(word2.charAt(2));

let city2 = "Karachi";
console.log(city2.charAt(3));


// Example 3: Uppercase and Lowercase
console.log("EXAMPLE 3: UPPERCASE AND LOWERCASE");
let name3 = "ali";
console.log(name3.toUpperCase());

let city3 = "ISLAMABAD";
console.log(city3.toLowerCase());

let word3 = "Hello";
console.log(word3.toUpperCase());


// Example 4: indexOf()
console.log("EXAMPLE 4: INDEXOF");
let text1 = "I like mango";
console.log(text1.indexOf("mango"));

let text2 = "Hello Ali";
console.log(text2.indexOf("Ali"));

let text3 = "I like tea";
console.log(text3.indexOf("coffee"));


// Example 5: slice()
console.log("EXAMPLE 5: SLICE");
let word4 = "Pakistan";
console.log(word4.slice(0, 4));

let word5 = "JavaScript";
console.log(word5.slice(0, 4));

let word6 = "Computer";
console.log(word6.slice(0, 3));


// Example 6: substring()
console.log("EXAMPLE 6: SUBSTRING");
let word7 = "Pakistan";
console.log(word7.substring(0, 4));

let word8 = "School";
console.log(word8.substring(1, 4));

let word9 = "Hello";
console.log(word9.substring(0, 2));


// Example 7: replace()
console.log("EXAMPLE 7: REPLACE");
let text4 = "I like tea";
console.log(text4.replace("tea", "milk"));

let text5 = "Hello Ali";
console.log(text5.replace("Ali", "Ahmed"));

let text6 = "I like cats";
console.log(text6.replace("cats", "dogs"));


// Example 8: split()
console.log("EXAMPLE 8: SPLIT");
let fruits1 = "Apple,Banana,Mango";
console.log(fruits1.split(","));

let names1 = "Ali,Ahmed,Hassan";
console.log(names1.split(","));

let subjects1 = "Math,English,Science";
console.log(subjects1.split(","));


// Example 9: trim()
console.log("EXAMPLE 9: TRIM");
let text7 = "   Hello   ";
console.log(text7.trim());

let text8 = "   Ali   ";
console.log(text8.trim());

let text9 = "   Pakistan   ";
console.log(text9.trim());


// Example 10: includes()
console.log("EXAMPLE 10: INCLUDES");
let text10 = "I like mango";
console.log(text10.includes("mango"));

let text11 = "Hello Ali";
console.log(text11.includes("Ahmed"));

let text12 = "I love Pakistan";
console.log(text12.includes("Pakistan"));


// Example 11: concat()
console.log("EXAMPLE 11: CONCAT");
let firstName1 = "Ali";
let lastName1 = "Abbas";
console.log(firstName1.concat(" ", lastName1));

let word10 = "Good";
let word11 = "Morning";
console.log(word10.concat(" ", word11));

let word12 = "Hello";
let word13 = "World";
console.log(word12.concat(" ", word13));