//TODO:===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера
//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"
// const userRule = prompt("Введіть логін");

// const userRule = prompt('Введіть логін');
// let password;

// function getLoginPassword() {
//   if (userRule === 'Адмін') {
//     password = prompt('Введіть пароль');
//     if (password === 'Я головний') {
//       alert('Добрий день!');
//     } else {
//       alert('Невірний пароль');
//     }
//   } else if (userRule === null) {
//     alert('Скасовано');
//   } else {
//     alert('Я вас не знаю');
//   }
// }

// getLoginPassword();

//TODO:===================================
//Напишіть цикл, який пропонує ввести
//число більше 100 через prompt.
//Якщо відвідувач ввів інше число - попросити
//ввести ще раз і так далі.
//Цикл має питати число, поки відвідувач не
//введе число більше 100, або натисне кнопку
//скасування в prompt

//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

// console.log(factorial(6));
// Надіюсь, ці завдання допоможуть тобі практикуватись з JavaScript! Якщо у тебе є будь-які додаткові запитання або якщо ти хочеш ще завдань, звертайся.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);

// console.log('2' + 2);

//TODO://Задачка про суму цифр: Напиши функцію, яка приймає число як вхідний параметр і повертає суму всіх його цифр. Наприклад, для числа 123 результат повинен бути 6 (1 + 2 + 3).

// function calculateSumNumbers(number) {
//   let total = 0;
//   let numberString = number.toString();

//   for (let i = 0; i < numberString.length; i++) {
//     total += parseInt(numberString[i], 10);
//   }
//   return total;
// }

// console.log(calculateSumNumbers(123));

//TODO://Задачка про перемішування слів: Напиши функцію, яка приймає рядок як вхідний параметр і повертає рядок з перемішаними літерами кожного слова. Наприклад, для рядка "Hello World" результат може бути "oHlle oWldr".
//TODO://Задачка про факторіал: Напиши функцію, яка приймає ціле число як вхідний параметр і повертає його факторіал. Факторіал числа n - це добуток всіх цілих чисел від 1 до n. Наприклад, факторіал числа 5 дорівнює 120 (1 * 2 * 3 * 4 * 5).

// function getLastElementMeta(array) {
//   return [array.length, array[array.length - 1]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

// const array = [1, 2, 3];
// console.log(array.length - 1);

// function calculateEngravingPrice(message, pricePerWord) {
//   const arrayMessage = message.split(' ');
//   return arrayMessage.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function getSlice(array, value) {
//   const indexValue = array.indexOf(value);

//   if (array.includes(value)) {
//     return array.slice(0, indexValue + 1);
//   } else {
//     return [];
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

// function createArrayOfNumbers(min, max) {
//   let array = [];
//   for (let i = min; i <= max; i += 1) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let total = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       total.push(i);
//     }
//   }
//   return total;
// }

// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(7, 7));

// function checkStorage(storage, item) {
//   let normalizedItem = item.toLowerCase();
//   return storage.includes(normalizedItem)
//     ? ${normalizedItem} is available to order!
//     : 'Sorry! We are out of stock!';
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

// function getCommonElements(array1, array2) {
//   let emptyArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       emptyArray.push(array1[i]);
//     }
//   }
//   return emptyArray;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let element of order) {
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function createReversedArray() {
//   const array = Array.from(arguments);
//   return array.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));

// function calculateTax(amount, taxRate = 0.2) {
//   return (amount *= taxRate);
// }

// console.log(calculateTax(100));

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// TODO: Обʼєкти===================================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// let num = 10;
// function check() {
//   num = 20;
//   return num;
// }
// check();
// console.log(num);

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// function getCommonElements(array1, array2) {
//   let emptyArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       emptyArray.push(array1[i]);
//     }
//   }
//   return emptyArray;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// const fruits = [':mango:', ':pineapple:', ':banana:', ':avocado:', ':grapes:'];
// for (let i = 0; i < fruits.length; i++) {
//   const s = `${i + 1}:${fruits[i]}`;
//   console.log(s);
// }

// const user = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
// };

// console.log(user['firstName']);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(typeof apartment.tags);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment.location);

//Умова задачі:
//Дано масив чисел. Знайди суму всіх парних чисел у цьому масиві.

// function getNumbers(numbers) {
//   for (let item of numbers) {
//     const sum = [];
//     if (item % 2 === 0) {
//       sum.includes(item);
//       console.log(item);
//     } else {
//       console.log('це не парне!!');
//     }
//   }
//   return numbers;
// }

// console.log(getNumbers([4, 7, 23, 40, 34, 45, 23, 60]));

// Умова задачі:
// Дано масив чисел. Треба вивести на екран всі парні числа.

// Вхідні дані:
// const numbers = [1, 3, 5, 2, 4, 6];

// Ваше завдання:
// Використовуючи цикл for, створіть програму,
// яка виводить на екран всі парні числа з масиву numbers.

// Ваш код:
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let item of colors) {
//   hexColors.push(item.hex);
//   rgbColors.push(item.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     } else {
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Grip'));

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (Object.keys(propCount)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({}));

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let values = Object.values(salaries);
//   for (let value in values) {
//     totalSalary += values[value];
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

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

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // let values = Object.values(salaries);

//   for (let value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     return 'Returning all books';
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook('New book 1'); // поверне "Adding book New book 1"
// bookShelf.addBook('New book 2'); // поверне "Adding book New book 2"

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotions(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// function add(args) {
//   return args;
// }

// console.log(add(1, 2, 3));
// console.log(...[1, 2, 3]);

//TODO:======================================== жаба-гадюка
// function getExtremeScores(scores) {
//   const extremeScores = {
//     best: 0,
//     worst: 0,
//   };

//   for (let score of scores) {
//     extremeScores.best = Math.max(...scores);
//     extremeScores.worst = Math.min(...scores);
//   }
//   return extremeScores;
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
//TODO:========================================
