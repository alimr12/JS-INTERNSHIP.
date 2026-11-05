console.log("Week 3 Day 1");

let car = {
    name: "Honda",
    color: "White"
};
console.log(car);

let student = {
    name: "Ali",
    age: 21
};
console.log(student);

let phone = {
    brand: "Samsung",
    price: 50000
};
console.log(phone.brand);
console.log(phone["price"]);

let book = {
    name: "English",
    pages: 100
};
console.log(book.name);
console.log(book["pages"]);

let bike = {
    color: "Red",
    price: 50000
};
bike.color = "Black";
console.log(bike);

let teacher = {
    name: "Ahmed",
    subject: "Math"
};
teacher.subject = "English";
console.log(teacher);

let animal = {
    name: "Cat"
};
animal.color = "White";
console.log(animal);

let laptop = {
    name: "Dell"
};
laptop.price = 80000;
console.log(laptop);

let employee = {
    name: "Ali",
    age: 25,
    salary: 50000
};
delete employee.salary;
console.log(employee);

let game = {
    name: "Football",
    type: "Sports"
};
delete game.type;
console.log(game);

let person = {
    name: "Ali",
    hello: function() {
        console.log("Hello");
    }
};
person.hello();

let dog = {
    name: "Tommy",
    sound: function() {
        console.log("Woof");
    }
};
dog.sound();

let boy = {
    name: "Ahmed",
    show: function() {
        console.log(this.name);
    }
};
boy.show();

let player = {
    name: "Ali",
    score: 50,
    show: function() {
        console.log(this.name, this.score);
    }
};
player.show();

let fruit = {
    name: "Apple",
    color: "Red"
};
for (let key in fruit) {
    console.log(key, fruit[key]);
}

let house = {
    rooms: 3,
    price: 5000000
};
for (let key in house) {
    console.log(key, house[key]);
}