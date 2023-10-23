"use strict";
// Typescript allow us to define optional and default parameter in function. Optional parameter denote by appending a ? after the parameter name and default paramater are specified by adding default value in paramter
// const greeting = (name:string , age:number = 20):string => `Hello ${name} your age is ${age} `           // THIS FUNCTION IS FOR DEFAULT PARAMETER
// OPTIONAL PARAMETER
const greeting = (name, age) => {
    if (age) {
        return `Hello ${name} your is age is ${age}`;
    }
    else {
        return `Hello ${name}`;
    }
};
console.log(greeting("Adnan"));
console.log(greeting("Hanan", 20));
