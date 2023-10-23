//  THREE METHODS FOR CREATING AN ARRAY
// WITH BRACKETS
// let firstArray:number[] =[1,2,3,4,5];
// console.log(firstArray);

// WITH ARRAY CONSTRUCTOR
// let secondArr:number[] = new Array(1,2,3,4,4,5);
// console.log(secondArr);

// USING ARRAY.OF()
// let thirdArr:number[] = Array.of(1,2,3,4,5,6,6)
// console.log(thirdArr);

// QUESTIONS :
// let arrObj:object = { name: "adnan", age: 20 };          WHAT WILL BE TYPE
// let arr:boolean[] = [true, false, true];                 WHAT WILL TYPE
// console.log(arrObj , arr);


// USING MAP METHOD
// let numbers:number[] = [1,2,3,4,5];
// // let newNumber:number[] = numbers.map((element:number ):number  => element * 2)
// let stringArr:string[] = numbers.map((element:number ):string  => element.toString())
// console.log(stringArr , numbers);


// QUESTION ABOUT MAP FILTER METHODS
let upperCase:string[] = ['adnan' , 'hanan' , 'tariq'];     // CONVERT ELEMENTS TO UPPERCASE
let newarr:string[] = upperCase.map((element:string) => element.toUpperCase());
// console.log(newarr);

let square:number[] = [4,9,16,25,144];      //FIND THE SQUARE ROOT OF ELEMENTS
let findSquare:number[] = square.map((element:number):number => Math.sqrt(element))
// console.log(findSquare);


let newArray:string[] = ['adnanTariq' , 'wajid' , 'hanan'];     // RETURN ELEMENT THAT LENGTH IS GREATER THAN 5
let findLength:string[] = newArray.filter((element:string) => element.length > 5);
// console.log(findLength);

let newArr:string[] = ['adnan' , 'wajid' , 'tariq' , 'amad'];
let startWith:string[] = newArr.filter((element:string) => element[0])
console.log(startWith);







