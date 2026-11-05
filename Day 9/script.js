
let users = [
{id:1,name:"Ali Ahmed",username:"Ali123",email:"ali@gmail.com",phone:"03001234567",website:"ali.com",address:{city:"Rawalpindi",zipcode:"46000"},company:{name:"Pakistan Tech",catchPhrase:"Building future"}},
{id:2,name:"Ahmed Khan",username:"Ahmed22",email:"ahmed@gmail.com",phone:"03011234567",website:"ahmed.com",address:{city:"Islamabad",zipcode:"44000"},company:{name:"Khan Traders",catchPhrase:"Business solutions"}},
{id:3,name:"Usman Malik",username:"Usman33",email:"usman@gmail.com",phone:"03021234567",website:"usman.com",address:{city:"Lahore",zipcode:"54000"},company:{name:"Malik LLC",catchPhrase:"Quality services"}},
{id:4,name:"Hamza Ali",username:"Hamza44",email:"hamza@gmail.com",phone:"03031234567",website:"hamza.com",address:{city:"Karachi",zipcode:"74000"},company:{name:"Ali Enterprises",catchPhrase:"Better business"}},
{id:5,name:"Bilal Ahmed",username:"Bilal55",email:"bilal@gmail.com",phone:"03041234567",website:"bilal.com",address:{city:"Rawalpindi",zipcode:"46000"},company:{name:"Ahmed LLC",catchPhrase:"Smart solutions"}},
{id:6,name:"Hassan Raza",username:"Hassan66",email:"hassan@gmail.com",phone:"03051234567",website:"hassan.com",address:{city:"Faisalabad",zipcode:"38000"},company:{name:"Raza Industries",catchPhrase:"Customer satisfaction"}},
{id:7,name:"Saad Khan",username:"Saad77",email:"saad@gmail.com",phone:"03061234567",website:"saad.com",address:{city:"Peshawar",zipcode:"25000"},company:{name:"Khan LLC",catchPhrase:"Modern technology"}},
{id:8,name:"Zain Abbas",username:"Zain88",email:"zain@gmail.com",phone:"03071234567",website:"zain.com",address:{city:"Multan",zipcode:"60000"},company:{name:"Abbas Solutions",catchPhrase:"Working together"}},
{id:9,name:"Usman Tariq",username:"Usman99",email:"usman2@gmail.com",phone:"03081234567",website:"usman2.com",address:{city:"Lahore",zipcode:"54000"},company:{name:"Tariq LLC",catchPhrase:"Growing business"}},
{id:10,name:"Ahsan Malik",username:"Ahsan10",email:"ahsan@gmail.com",phone:"03091234567",website:"ahsan.com",address:{city:"Islamabad",zipcode:"44000"},company:{name:"Malik Traders",catchPhrase:"Trusted services"}}
];

console.log("1. ACCESSING OBJECTS");
console.log(users[0].username);
for(let i=0;i<users.length;i++){
if(users[i].name=="Hamza Ali"){
console.log(users[i].address.zipcode);
}}

console.log("2. ADDING OBJECTS");
users.push({id:11,name:"John Doe",username:"John11",email:"john@example.com",phone:"03101234567",website:"john.com",address:{city:"Rawalpindi",zipcode:"46000"},company:{name:"John Traders",catchPhrase:"Quality products"}});
console.log(users);
users.push({id:12,name:"Tech User",username:"Tech12",email:"tech@gmail.com",phone:"03111234567",website:"tech.com",address:{city:"Islamabad",zipcode:"44000"},company:{name:"TechCorp",catchPhrase:"Innovating the future"}});
console.log(users);

console.log("3. REMOVING OBJECTS");
users.pop();
console.log(users);
for(let i=0;i<users.length;i++){
if(users[i].id==4){
users.splice(i,1);
}}
console.log(users);

console.log("4. UPDATING PROPERTIES");
for(let i=0;i<users.length;i++){
if(users[i].id==3){
users[i].phone="123-456-7890";
}}
console.log(users);
for(let i=0;i<users.length;i++){
if(users[i].username=="Ali123"){
users[i].website="newwebsite.com";
}}
console.log(users);

console.log("5. ITERATING OVER THE ARRAY");
for(let i=0;i<users.length;i++){
console.log(users[i].name);
}
for(let i=0;i<users.length;i++){
console.log(users[i].address.city);
}

console.log("6. FILTERING");
let cityUsers=users.filter(function(user){
return user.address.city=="Rawalpindi";
});
console.log(cityUsers);
let companyUsers=users.filter(function(user){
return user.company.name.includes("LLC");
});
console.log(companyUsers);

console.log("7. MAPPING");
let emails=users.map(function(user){
return user.email;
});
console.log(emails);
let details=users.map(function(user){
return {name:user.name,website:user.website};
});
console.log(details);

console.log("8. FINDING AN OBJECT");
let user1=users.find(function(user){
return user.username=="Usman33";
});
console.log(user1);
let user2=users.find(function(user){
return user.email=="zain@gmail.com";
});
console.log(user2);

console.log("9. SORTING");
users.sort(function(a,b){
return b.id-a.id;
});
console.log(users);
users.sort(function(a,b){
if(a.name>b.name){
return 1;
}else if(a.name<b.name){
return -1;
}else{
return 0;
}});
console.log(users);
