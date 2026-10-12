console.log("DAY 2: JAVASCRIPT DATA TYPES AND ARITHMETIC");

console.log("EXAMPLE 1: Number");
let age = 21;
console.log(age);
console.log(typeof age);

console.log("EXAMPLE 2: String");
let name = "Ali";
console.log(name);
console.log(typeof name);

console.log("EXAMPLE 3: Boolean");
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

console.log("EXAMPLE 4: Undefined");
let marks;
console.log(marks);
console.log(typeof marks);

console.log("EXAMPLE 5: Null");
let address = null;
console.log(address);
console.log(typeof address);

console.log("EXAMPLE 6: NaN");
let result = "hello" * 5;
console.log(result);
console.log(typeof result);

console.log("EXAMPLE 7: BigInt");
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

console.log("EXAMPLE 8: Symbol");
let id = Symbol("id");
console.log(id);
console.log(typeof id);

console.log("EXAMPLE 9: Object");
let student = {
    name: "Ali",
    age: 21
};
console.log(student);
console.log(typeof student);

console.log("EXAMPLE 10: Array");
let colors = ["red", "blue", "green"];
console.log(colors);
console.log(typeof colors);

console.log("EXAMPLE 11: Addition");
const a = 5;
const b = 10;
console.log("The addition is:", a + b);

console.log("EXAMPLE 12: String Addition");
const firstName = "Ali";
const lastName = "Abbas";
console.log(firstName + " " + lastName);

console.log("EXAMPLE 13: Subtraction");
const c = 20;
const d = 10;
console.log("The subtraction is:", c - d);

console.log("EXAMPLE 14: Multiplication");
const mult1 = 5;
const mult2 = 10;
console.log("The multiplication is:", mult1 * mult2);

console.log("EXAMPLE 15: Division");
const div1 = 41;
const div2 = 10;
console.log("The division is:", div1 / div2);

console.log("EXAMPLE 16: Modulus");
const m1 = 41;
const m2 = 10;
console.log("The remainder is:", m1 % m2);

console.log("EXAMPLE 17: Exponentiation");
const p1 = 3;
const p2 = 2;
console.log("The power is:", p1 ** p2);

console.log("EXAMPLE 18: Even or Odd");
const number = 8;
console.log(number % 2);

console.log("EXAMPLE 19: Multiple Operations");
const x = 10;
const y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log("EXAMPLE 20: Student Marks");
const english = 80;
const maths = 90;
const computer = 85;
const total = english + maths + computer;
const average = total / 3;
console.log("Total marks:", total);
console.log("Average marks:", average);