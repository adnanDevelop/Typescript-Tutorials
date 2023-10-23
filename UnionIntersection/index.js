"use strict";
// UNION IN TYPESCRIPT
// Union are used when a value can be more than  a single type. And union symbol is represented by (|)
// Exmple
const UnionType = (value) => {
    if (typeof value === "string") {
        let newValue = value.charAt(0).toUpperCase() + value.slice(1);
        return newValue;
    }
    else if (typeof value === "boolean") {
        return (value ? 'Yes' : 'False');
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Passed value is false");
    }
};
//Ab in dono ko combine kerny k liye hum intersection ka use kerain gy
const firstStudent = {
    name: 'Adnan',
    age: 20,
    depart: 'IT',
    id: 20,
};
const userData = { name: 'Wajid', age: 26, city: 'Pindigheb', phone: '03230838837' };
const userDetailFunction = (value) => {
    return `Username is : ${value.name} and he is from  ${value.city}`;
};
console.log(userDetailFunction(userData));
