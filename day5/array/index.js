const a = ["A", "B", "C", "D"];
console.log(a);
a.push([1, 2]);
console.log(a);

const items = [
  { name: "Apple", price: 1200 },
  { name: "Speaker", price: 500 },
  { name: "Phone", price: 900 },
  { name: "Monitor", price: 500 },
  { name: "Destop", price: 1600 },
];



const filteredItems = items.filter((item) => {
  return item.price >= 1000;
});
console.log(items);
console.log(filteredItems);

// convert an array into a new array
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);
const itemPrices = items.map((item) => {
  return item.price;
});
console.log(itemPrices);

const foundApple = items.find((item) => {
  return item.name === "Apple";
});

console.log(foundApple);

const products = items.forEach((item) => {
  console.log(item.name);
});

const hasExpensiveItem = items.some((item) => {
  return item.price >= 1000;
});

console.log(hasExpensiveItem);

const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

const totalPrice = items.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice);

let totals =0;
items.forEach((item)=>{
    totals += item.price
})
console.log(totals);

const nums = [1, 2, 3, 4, 5];

const includesTwo = nums.includes(2);
console.log(includesTwo);
