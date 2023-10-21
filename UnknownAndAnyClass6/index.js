"use strict";
// ANY TYPE
let number = 10;
number = 'adnan';
console.log(number);
// UNKNOWN TYPE
let unknownValue;
unknownValue = 'Adnan';
unknownValue = 12;
if (typeof unknownValue === 'string') {
    console.log(unknownValue);
}
else if (typeof (unknownValue) === 'number') {
    console.log(unknownValue + 10);
}
