let employees = [
    {id: 1, name: "Ali", department: "IT", salary: 80000},
    {id: 2, name: "Ahmed", department: "HR", salary: 60000},
    {id: 3, name: "Sara", department: "IT", salary: 90000},
    {id: 4, name: "Usman", department: "Finance", salary: 70000},
    {id: 5, name: "Ayesha", department: "IT", salary: 50000}
];

let result = employees.filter(emp => emp.department == "IT");
console.log(result);

let names = employees.map(emp => emp.name);
console.log(names);

let employee = employees.find(emp => emp.id == 3);
console.log(employee);

let salary = employees.filter(emp => emp.salary > 70000).map(emp => emp.name);
console.log(salary);

let itEmployees = employees.filter(emp => emp.department == "IT");
let total = 0;

for (let i = 0; i < itEmployees.length; i++) {
    total = total + itEmployees[i].salary;
}

let average = total / itEmployees.length;
console.log(average);