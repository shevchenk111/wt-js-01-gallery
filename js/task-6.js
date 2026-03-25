let input;
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було написано не число, спробуйте ще раз");
    continue;
  }

  total += number;
}

alert(`Загальна сума чисел дорівнює ${total}`);