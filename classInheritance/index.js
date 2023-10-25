"use strict";
// Class is a blueprint for creating object with similar properties and mothods.Blueprint refer to a template or instruction that create similar properties and methods.
class Data {
    constructor(studentName, studentAge, studentHobby) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentHobby = studentHobby;
    }
    Greet() {
        return `Hello my name is ${this.studentName}. I am ${this.studentAge} years old.`;
    }
}
//INTHERITANCE
// Inheritance allow class to use the functionalities of existing class without rewriting it. Inheritance is a mechanism in which one class can use the property of another class by using extend keyword.
// SUPER() keyword
// Super keyword use to class the methods of parent class. It is used in inheritance where we have sub class and we want to extend existing class and we want to inovake the methods of that class.
class studentData extends Data {
    constructor(studentName, studentAge, studentGrade, studentHobby) {
        super(studentName, studentAge, studentHobby);
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
        this.studentHobby = studentHobby;
    }
    Greet() {
        return ` ${super.Greet()}. My grades is ${this.studentGrade}`;
    }
}
let adnan = new Data("Adnan tariq", 22, ["cricket ", "football", "coding"]);
let uzaifa = new Data("Uzaifa", 25, ["cricket ", "football", "coding"]);
// console.log(adnan.age); we cant access age because this property is private
// STUDENT DATA CLASS
let studentOne = new studentData("Adnan", 22, 10, [
    "cricket ",
    "football",
    "coding",
]);
console.log(studentOne.Greet());
// ACCESS MODIFIERS
/*
                     | PARENT CLASS || CHILD CLSS || OUTSIDE CLASS
        Public       | ✔            ||✔          ||✔
        Protected    | ✔           ||✔           ||❌
        Private      | ✔           ||❌          ||❌

        public: class main jis property k sath hum public type kery gy usko hum kaheen sy bhi access ker sakty h.
        Protectd : ager protected class lagi hoi ho toh us property ko hum outside class access nai ker sakty like ager us property ko console kerna ho toh nai hoga.
        Private : ager private class hoi toh wo child aur outside class dono main nai kaam kery gi sirft parent class main kamm kerygi.
        outside matlab jo class sy bahir hum log instance create kerty h usko outside class kehty h.

*/
