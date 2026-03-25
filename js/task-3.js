const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const userInput = prompt("Введіть пароль");

if (userInput === null) {
  message = "Скасовано користувачем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);