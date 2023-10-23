"use strict";
// FUNTIONS IN TYPESCRIPT
// TRADITIONAL FUNCTION
// function greeting(name:string , value:number) {
//     console.log(`Hello my name is ${name} and my age is ${value}`);
// }
// greeting('Adnan' , 20);
// // FAT ARROW FUNCTION
// const greeting = (name:string , value:number) => {
//     console.log(`Hello my name is ${name} and my age is ${value}`);
// }
// let greeting = (name:string , value:number):string => `Hello my name is ${name} and my age is ${value}`;
// console.log(greeting('Adnan' , 20));
// AGER HUM ADD TYPE ADD NA KRY K FUNCTION JO RETURN KARY GA WO KYA HOGA TO WO BY DEFAULT (:avoid)  LAGA DETA H YE TB LAGATA H JB HUM RETURN KEYWORD USE NA KRY AGER RETURN KEYWORD KA USE KERY TO WOH AUTOMATICALLY (:STRING) YA JO BHI RETURN KI HOI VALUE HOGI USKI TYPE ADD KERDEGA 
// CREATE PALINDROM AND THEN CHECK THEY ARE MATCH IF MATCH THEN RETURN TRUE OTHERWISE FALSE
// const palDrom = (value:string):boolean => {
//     let newValue:string = value.split('').reverse().join('');
//     console.log(newValue);
//     return newValue === value;
// }
// console.log(palDrom('12321'));
// function calculateAverage(numbers):unknown {
//     if (numbers.length === 0) return 0;
//     return numbers.reduce((total, number) => total + number, 0) / numbers.length;
//   }
//   // Example usage:
//   const numbers = [5, 10, 15, 20, 25];
//   const result = calculateAverage(numbers);
//   console.log('The average is:', result);
// const maxValue = (value:any):number => {
//     return Math.max(...value);
// }
// console.log(maxValue([1,23,4,5,63,23]));
const calculateaverage = (numbers) => {
    const totalSum = numbers.reduce((num1, num2) => num1 + num2);
    const average = totalSum / numbers.length;
    return average;
};
console.log(calculateaverage([1, 4, 10, 15]));
