const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// Змініть код під цим рядком

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastTreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastTreeEls);