const fruits = {
    Apple: 1.5,
    Banana: 0.5,
    Orange: 0.8,
    Mango: 2.0,
    Grapes: 2.5,
    Strawberry: 3.0,
    Pineapple: 2.2,
    Watermelon: 4.0,
    Peach: 1.8,
    Blueberry: 3.5
};

const fruitsKeys = Object.keys(fruits);
console.log(fruitsKeys);
console.log(fruitsKeys[2])

const prices = Object.values(fruits);
console.log(prices);
console.log(prices[4])


const fruitsWithPrices = Object.entries(fruits);
console.log(fruitsWithPrices);
console.log(fruitsWithPrices[1])
console.log(fruitsWithPrices[1][0])
console.log(fruitsWithPrices[1][1])


