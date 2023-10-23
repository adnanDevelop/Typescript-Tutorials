"use strict";
// SIMPLE OBJECT IN JAVASCRIPT
// let student  = {
//     name : 'Adnan',
//     age : 20,
//     class : '12th',
// }
// console.log(student);
// OBJECT IN TYPESCRIPT
const newStudent = {
    name: "Hanan",
    age: 25,
    class: "14th",
};
let students = {
    name: 'Adnan',
    age: 20,
    class: '12th',
};
let oldStudent = {
    name: 'Wajid',
    age: 26,
    class: '12th',
    city: 'Islamabad',
};
// console.log(students , oldStudent);
// QUESTION : Create a product object and calculate the total price ;
let productData = {
    name: 'Laptop',
    price: 20000,
    quantity: 5,
};
const childrend1 = {
    name: 'Adnan',
    age: 20,
    gender: 'male',
    Greet: (country) => `My name is ${childrend1.name}. My age is ${childrend1.age} and i am from ${country}`
};
const childrend2 = {
    name: 'Hanan Tariq',
    age: 25,
    gender: 'male',
    Greet: (country) => `My name is ${childrend2.name}. My age is ${childrend2.age} and i am from ${country}`
};
console.log(childrend1.Greet('Pindigheb'));
console.log(childrend2.Greet('Rawalpindi'));
