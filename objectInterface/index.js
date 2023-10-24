"use strict";
// There are three ways of creating objects typescript
// first object properties
// Second type aliases 
// Third object interface
const product = {
    name: 'cafe',
    price: 150,
    quantity: 5,
};
const totalPrice = (value) => {
    const { price, quantity } = value;
    return price * quantity;
};
console.log(totalPrice(product));
