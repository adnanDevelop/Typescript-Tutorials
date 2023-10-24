"use strict";
// What is enum in typescript
// Enum are commonly used when you want to represent a set of related values and choose one value from multiple options. Enum provide a convanient way to define a set of named value and associate them with specific meaningns
// CREATING ENUM
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "Admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Adnan",
    password: "adnan",
    role: Roles.user,
};
const user2 = {
    name: "Wajid",
    password: "wajid123",
    role: Roles.admin,
};
const isAdmin = (value) => {
    const { name, role } = value;
    if (role === "Admin") {
        return `${name} you are allow`;
    }
};
const isUser = (value) => {
    const { name, role } = value;
    if (role === "user") {
        return `${name} you are not allow`;
    }
};
const driverOne = ['Adnan', 26, true];
const drivertwo = ['Hanan', 28, false];
// driverOne.push('adnan')    readonly laganay sy ab compilor error dega k is tarah hum array main new  elements add nai ker sakty.
const haveLicense = (value) => {
    const [name, age, license] = value;
    console.log(`Name : ${name} his/her age is : ${age} and have license ${license ? 'true' : 'false'}`);
};
console.log(haveLicense(driverOne));
console.log(haveLicense(drivertwo));
console.log(driverOne);
