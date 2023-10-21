// ANY TYPE

let number:any = 10;
number = 'adnan';
console.log(number);


// UNKNOWN TYPE
let unknownValue:unknown ;
unknownValue = 'Adnan';
unknownValue = 12;

if(typeof unknownValue === 'string') {
    console.log(unknownValue);
    
} else if(typeof(unknownValue) === 'number') {
    console.log(unknownValue + 10);
    
}