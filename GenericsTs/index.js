"use strict";
// Generics in typescript
// Generic are used to create reusable component or function that can work with multpile data types. and its syntax is <T>
// <T> iska matlb placeholder ab jis type ka bhi data howa ye handle kery ga usko type add ker dy ga.T ki jaga hum kuch bhi likh sakty h. Jab bhi hum function ko call kerty h toh behtar yehi h k uske sath hi type bata dein like getData<number>(20) is tarah sy ye number phir function jahan define howa h wahan <T> is t ki jaga value aajaigi.
// WITHOUT GENERIC WE USE UNION DATA TYPE AND ITS DIFFICULT TO ADD ALL TYPES
// const getData = (value:string | number | boolean):string | number | boolean => {
//     return value; 
// }
// NOW WITH GENERIC 
function getData(value) {
    return value;
}
console.log(getData('Adnan'));
console.log(getData(20));
console.log(getData(true));
// HOW TO WORK WITH MUTLIPLE TYPES IN GENERIC
function newData(value, valuetwo) {
    console.log(valuetwo, value);
}
;
newData('adnan', true);
