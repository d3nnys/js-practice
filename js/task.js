// дай умову задачі з циклом по js, щоб вона не була вирішена, я сам хочу її вирішити

//Створіть цикл for в JavaScript, який перебирає числа від 1 до 100.
//У тілі циклу виводьте на консоль лише ті числа, які діляться на 3 і на 5 одночасно.

// function getNumbers(min, max, number) {
//   for (let i = min; i <= max; i++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(number);
//     }
//   }
//   return number;
// }

// console.log(getNumbers(1, 100));

// function getNumbers(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// getNumbers(1, 100);

// Напишіть цикл, який буде виводити на екран всі парні числа від 0 до заданого числа (включно), але пропускатиме числа, кратні 3.
// Вхідні параметри:
// - number: число, до якого потрібно вивести парні числа

// Приклад виклику функції:
// printEvenNumbers(10);

// Очікуваний результат:
// 2
// 4
// 8
// 10

// function printEvenNumbers(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// printEvenNumbers(1, 10);

// Уявіть, що у вас є масив чисел. Ваше завдання - написати цикл, який перебирає всі числа у масиві та виводить лише парні числа.
// Умови:
// - Не використовуйте вбудовані методи, такі як `filter` або `forEach`.
// - Використовуйте цикл `for` для ітерації по масиву.

// У вас є масив імен студентів. Напишіть цикл, який проходиться по кожному елементу масиву і
// виводить в консоль повідомлення, що містить ім'я студента та його порядковий номер.

// function getNames(students) {
//   let emptyArray = [];
//   for (let i = 0; i < students.length; i++) {
//     emptyArray.push(students[i]);
//   }
// }
// console.log(getNames('john', 'maria'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];

//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Scanner'));

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const objectValues = [];

//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       objectValues.push(product[propName]);
//     }
//   }
//   return objectValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));

//TODO:
// function isEnoughCapacity(products, containerSize) {
//   // let totalProducts = 0;
//   // for (let product of Object.values(products)) {
//   //   totalProducts += product;
//   // }
//   let totalProducts = Object.values(products).reduce(function (acc, item) {
//     return acc + item;
//   }, 0);
//   if (totalProducts <= containerSize) {
//     return true;
//   }
//   return false;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
//TODO:
