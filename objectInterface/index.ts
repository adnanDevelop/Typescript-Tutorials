// There are three ways of creating objects typescript
// first object properties
// Second type aliases 
// Third object interface

// Interface
// It is a powerfull feature that allow us to define a contract for an object shape. It specifies the properties and their types that object must have to be considered of that particular interface type. 

// dono main koi difference nai h interface aur type alias main same kaam kerty h bas thora sa hi different h.

// EXAMPLE

interface ProductType {
    name : string;
    price : number;
    quantity : number;
}

const product:ProductType = {
    name : 'cafe',
    price : 150,
    quantity : 5,
}

const totalPrice = (value:any) => {
    const {price , quantity} = value;
    return  price * quantity
}

console.log(totalPrice(product));
