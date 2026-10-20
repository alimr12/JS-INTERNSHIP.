console.log("Function Declaration");

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

function sub(a, b) {
    return a - b;
}
console.log(sub(5, 2));

function mul(a, b) {
    return a * b;
}
console.log(mul(2, 4));

function div(a, b) {
    return a / b;
}
console.log(div(10, 2));

function hello(name) {
    return "Hello " + name;
}
console.log(hello("Ali"));

function age(a) {
    return "Age " + a;
}
console.log(age(21));

function city(name) {
    return "City " + name;
}
console.log(city("Lahore"));

function square(a) {
    return a * a;
}
console.log(square(4));

function double(a) {
    return a + a;
}
console.log(double(5));

function student(name) {
    return "Student " + name;
}
console.log(student("Ahmed"));


console.log("Function Expression");

let add1 = function(a, b) {
    return a + b;
};
console.log(add1(3, 2));

let sub1 = function(a, b) {
    return a - b;
};
console.log(sub1(8, 3));

let mul1 = function(a, b) {
    return a * b;
};
console.log(mul1(3, 2));

let div1 = function(a, b) {
    return a / b;
};
console.log(div1(8, 2));

let hello1 = function(name) {
    return "Hello " + name;
};
console.log(hello1("Ali"));

let age1 = function(a) {
    return "Age " + a;
};
console.log(age1(20));

let city1 = function(name) {
    return "City " + name;
};
console.log(city1("Karachi"));

let square1 = function(a) {
    return a * a;
};
console.log(square1(5));

let double1 = function(a) {
    return a + a;
};
console.log(double1(4));

let student1 = function(name) {
    return "Student " + name;
};
console.log(student1("Hassan"));


console.log("Arrow Function");

let add2 = (a, b) => a + b;
console.log(add2(2, 4));

let sub2 = (a, b) => a - b;
console.log(sub2(7, 2));

let mul2 = (a, b) => a * b;
console.log(mul2(3, 3));

let div2 = (a, b) => a / b;
console.log(div2(10, 5));

let hello2 = name => "Hello " + name;
console.log(hello2("Ali"));

let age2 = a => "Age " + a;
console.log(age2(21));

let city2 = name => "City " + name;
console.log(city2("Islamabad"));

let square2 = a => a * a;
console.log(square2(3));

let double2 = a => a + a;
console.log(double2(6));

let student2 = name => "Student " + name;
console.log(student2("Ahmed"));


console.log("Anonymous Function");

setTimeout(function() {
    console.log("Hello");
}, 1000);

setTimeout(function() {
    console.log("Ali");
}, 1000);

setTimeout(function() {
    console.log("Ahmed");
}, 1000);

setTimeout(function() {
    console.log("Pakistan");
}, 1000);

setTimeout(function() {
    console.log("Islamabad");
}, 1000);

setTimeout(function() {
    console.log("Good Morning");
}, 1000);

setTimeout(function() {
    console.log("Good Night");
}, 1000);

setTimeout(function() {
    console.log("Welcome");
}, 1000);

setTimeout(function() {
    console.log("JavaScript");
}, 1000);

setTimeout(function() {
    console.log("Student");
}, 1000);


console.log("IIFE");

(function() {
    console.log("Hello");
})();

(function() {
    console.log("Ali");
})();

(function() {
    console.log("Ahmed");
})();

(function() {
    console.log(2 + 3);
})();

(function() {
    console.log(5 + 5);
})();

(function() {
    console.log(10 - 5);
})();

(function() {
    console.log(2 * 3);
})();

(function() {
    console.log("Pakistan");
})();

(function() {
    console.log("Islamabad");
})();

(function() {
    console.log("JavaScript");
})();