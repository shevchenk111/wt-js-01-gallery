const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

/*
 * Викличте функції для перевірки працездатності вашої реалізації.
 */

logItems(['Alex', 'Poly', 'Robert', 'Lada', 'Jay', 'Kiril']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);