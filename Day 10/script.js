
const students = [
    {
        name: "Ali",
        age: 21,
        major: "Information Technology"
    },
    {
        name: "Ahmed",
        age: 22,
        major: "Computer Science"
    },
    [{
        name: "Usman",
        age: 20,
        major: "Software Engineering"
    }]
];

students[0].name = "Hamza";
console.log(students[0]);

console.log(students[2][0].name = "Bilal");

for(let i=0; i<students.length; i++){
    console.log("Running times");
    for(let key in students[i]){
        console.log("Inside loop running times");
        console.log(key);
    }
}
