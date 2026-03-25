function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = "У замовленні немає товарів";
  } else if (ordered > available) {
    message = "Ваше замовлення занадто велике, на складі недостатньо товарів!";
  } else {
    message = "Замовлення прийнято, наш менеджер зв'яжеться з Вами.";
  }

  return message;
}

// приклади перевірки
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));