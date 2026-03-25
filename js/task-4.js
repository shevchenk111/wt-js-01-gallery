const credits = 23580;
const pricePerDroid = 3000;

const amount = prompt("Скільки дроїдів ви хочете купити?");

if (amount === null) {
  console.log("Скасовано користувачем!");
} else {
  const totalPrice = amount * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    const balance = credits - totalPrice;
    console.log(
      `Ви купили ${amount} дроїдів, на рахунку залишилося ${balance} кредитів.`
    );
  }
}