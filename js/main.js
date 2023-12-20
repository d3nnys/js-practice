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

//Задачка про суму цифр: Напиши функцію, яка приймає число як вхідний параметр і повертає суму всіх його цифр. Наприклад, для числа 123 результат повинен бути 6 (1 + 2 + 3).
//Задачка про перемішування слів: Напиши функцію, яка приймає рядок як вхідний параметр і повертає рядок з перемішаними літерами кожного слова. Наприклад, для рядка "Hello World" результат може бути "oHlle oWldr".
//Задачка про факторіал: Напиши функцію, яка приймає ціле число як вхідний параметр і повертає його факторіал. Факторіал числа n - це добуток всіх цілих чисел від 1 до n. Наприклад, факторіал числа 5 дорівнює 120 (1 * 2 * 3 * 4 * 5).

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
