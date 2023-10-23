// SIMPLE OBJECT IN JAVASCRIPT
// let student  = {
//     name : 'Adnan',
//     age : 20,
//     class : '12th',
// }
// console.log(student);


// OBJECT IN TYPESCRIPT
const newStudent: {
  name: string;
  age: number;
  class: string;
} = {
  name: "Hanan",
  age: 25,
  class: "14th",
};
// console.log(newStudent);


// ALIASES IN TYPESCRIPT
// it I used to give a name to a specific type of combination of types. t allow us to create a custom name for a type , making it easir to reuse and refer to the same type in different part of our code. Type aliases provide better readibility , organization and abtraction of complex types. 
type Types = {                // THIS IS CALLED ALIASES. NOW I CAN USE THIS ANYWHERE OR WITH ANY OBJECT
    name? : string;
    age? : number ;
    class? : string;
    city?: string;          // THIS IS OPTIONAL NOW HER OBJECT MAIN YE ZAROORI NAI K CITY KEY ADD KERNI HI KERNI H
    price?: number;
    quantity?:number;
};

let students:Types ={
    name : 'Adnan',
    age : 20,
    class : '12th',
}

let oldStudent:Types = {
    name : 'Wajid',
    age : 26,
    class : '12th',
    city : 'Islamabad',
}

// console.log(students , oldStudent);

// QUESTION : Create a product object and calculate the total price ;

let productData:Types = {
    name : 'Laptop',
    price : 20000,
    quantity : 5,
}

// console.log(productData);

// What is call signature
// It  refer to the function defination which include function paramater and return type.It define the structure and type of function without including function implementation.

type Greeting = {
  name : string;
  age : number;
  gender : string;
  Greet : (country:string) => string; 
  // (country:string):string              Second method for calling signature
}

const childrend1:Greeting = {
  name : 'Adnan',
  age : 20,
  gender : 'male',
  Greet : (country:string):string => `My name is ${childrend1.name}. My age is ${childrend1.age} and i am from ${country}`
};

const childrend2:Greeting = {
  name : 'Hanan Tariq',
  age : 25,
  gender : 'male',
  Greet : (country:string):string => `My name is ${childrend2.name}. My age is ${childrend2.age} and i am from ${country}`
};

console.log(childrend1.Greet('Pindigheb'));
console.log(childrend2.Greet('Rawalpindi'));










