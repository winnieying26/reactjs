// currying takes a function that receives more than one parameter and breaks it ito
// a series of unary(one parameter) functions

const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};
const mySandwich = buildSandwich("Bacon")("Lettuce")("eggs");
console.log(mySandwich);

const buildLunch = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1}, ${ingred2}, ${ingred3}`;

const myLunch = buildLunch("Rice")("Beef")("Vegetables");
console.log(myLunch);

const multiply = (x, y) => x * y;

const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

/*const updateElementText = id => content =>
  document.querySelector(`#${id}`).textContent = content;

const updateHeaderText = updateElementText("header");
updateHeaderText("Hello World!")*/


const addCustomer = fn => (...args) => {
    console.log('saving customer info...');
    return fn(...args);
};
const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
};

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`);
};

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);

completeOrder = (addCustomer(completeOrder));

completeOrder("1000")

/* function addCustomer(...args) {
    return function processOrder(...args) {
        return function completeOrder(...args) {
            // end
        };
    };
}
*/

// Requires a function with a fixed number of parameters
const curry = (fn) => {
    return function curried(...args) {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args); // bind creates a new function
        }
        return fn(...args);
    };
};
