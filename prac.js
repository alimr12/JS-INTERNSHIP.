let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];d
let even = numbers.filter(function(num) {
    return num % 2 == 0;
});

let odd = numbers.filter(function(num) {
    return num % 2 != 0;
});
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);