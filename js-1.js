///// switch case /////
// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//   case 4:
//     price = 50;
//     break;
//   case 2:
//     price = 70;
//     break;
//   case 3:
//     price = 800;
//     break;
//   default:
//     console.log("Алексей - телепузик");
// }
// console.log(price);
///// switch case /////

///// for /////

// const min = 1;
// const max = 10;
// let total = 0;
// for (let i = min; i < max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("NOчётное", i);
//     continue;
//   }
//   console.log("чётное", i);
//   total += i;
// }
// console.log(total);
///// for /////

///// интересности /////

// console.log(typeof NaN); // Number
// console.log(typeof typeof NaN); // String
// const rep = ["anna", "alexey", "sergey", "oleg"];
// const lastIndex = rep.length - 1;
// console.table(rep);

///// FOR******** FOR OF***** /////

// for (let i = 0; i <= lastIndex; i += 1) {
//   rep[i] += " ds";
//   console.log(rep[i]);
// }

// for (const re of rep) {
//   console.log(re);
// }

// const prices = [1, 3, 4, 5, 6, 7, 8, 11];
// let total = 0;
// // for (let i = 0; i < prices.length; i += 1) {
// //   total += prices[i];
// // }

// for (const price of prices) {
//   total += price;
// }
// console.log("total:", total);

///// FOR******** /////

///// Includes *** /////
// const whereIncludes = prices.includes(11) ? " есть в массиве" : "нет в массиве";

// console.log(whereIncludes);
///// Includes *** /////
// const names = "Alexey";
// const namesNormalized = names.toLowerCase().split("").join("-");

// console.log(namesNormalized);
// /////////////// ///////////////
// let total = 0;
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// const num3 = [...num1, ...num2];
// for (const num of num3) {
//   total += num;
// }

// console.log(total);
// num1.splice(3, 0, 4, 5, 6);
// console.log(num1);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `Вы заказали ${orderedQuantity} дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message);
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Недостаточно средств на счету!";
//   } else {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
//       customerCredits - totalPrice
//     } кредитов.`;

//     // Пиши код выше этой строки
//   }
//   return message;
// }
// console.log(makeTransaction(1000, 3, 15000));
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount = 0;
//   // Пиши код ниже этой строки
//   if (totalSpent > 50000) {
//     discount === GOLD_DISCOUNT;
//   }
//   if (totalSpent <= 50000 && totalSpent >= 20000) {
//     discount === SILVER_DISCOUNT;
//   }
//   if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount === BRONZE_DISCOUNT;
//   }

//   // Пиши код выше этой строки
//   return discount;
// }
// console.log(getDiscount(50000));

// switch
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case "Австралия":
//       message = "Доставка в Австралия будет стоить 170 кредитов";
//       break;
//     case "Китай":
//       message = "Доставка в Китай будет стоить 100 кредитов";
//       break;
//     case "Чили":
//       message = "Доставка в Чили будет стоить 250 кредитов";
//       break;
//     case "Ямайка":
//       message = "Доставка в Ямайка будет стоить 120 кредитов";
//       break;
//     default:
//       message = "Извините, в вашу страну доставки нет";
//   }
//   // Пиши код выше этой строки
//   return message;
// }
// switch

//slice
// function getSubstring(string, length) {
//   const substring = string.slice(string[0], length); // Дополни эту строку

//   return substring;
// }
///
// function formatMessage(message, maxLength) {
//   let result;

//   result =
//     message.length > maxLength
//       ? message.slice(0, maxLength.length) + "..."
//       : message;

//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// function getExtremeElements(array) {
//   // Пиши код ниже этой строки
//   const clearArray = [];
//   clearArray.push(array[0], array[array.length - 1]);
//   return clearArray;
// }
// console.log(getExtremeElements(["яблоко", "персик", "груша", "банан"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const longerMessage = message.split(" ");
//   const howManywords = longerMessage.length;
//   // Пиши код ниже этой строки
//   // Пиши код выше этой строки
//   return howManywords * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript у меня в крови", 10));

// function slugify(title) {
//   // Пиши код ниже этой строки

//   const normalizedTitle = title.toLowerCase();
//   return normalizedTitle.split(" ").join("-");
// }
// console.log(slugify("Английский для разработчика"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки
//   const generalArray = firstArray.concat(secondArray);
//   if (generalArray.length >= maxLength) {
//     return generalArray.slice(0, maxLength);
//   } else {
//     return generalArray.slice(0);
//   }
// }
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4));
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2));

////////   Функция для суммы по предыдущим числам по 1+2+3+4+5+6+7 ////////

// function calculateTotal(number) {
//   let summ = 0;
//   for (let i = 0; i <= number; i += 1) {
//     summ += i;
//   }

//   return summ;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(7));
// console.log(calculateTotal(17));
// console.log(calculateTotal(18));
////////   Функция для суммы по предыдущим числам по 1+2+3+4+5+6+7 ////////

////////   Перебор в переменной по индексу из массива ////////
// const fruits = ["яблоко", "слива", "груша", "апельсин"];

// for (let i = 0; i <= fruits.length - 1; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
////////   Перебор в переменной по индексу из массива ////////

/// Поиск самого длинного слова в строке без sort() /////

// function findLongestWord(string) {

//   let longestWord = "";
//   let normalizedString = string.split(" ");
//   for (const str of normalizedString) {
//     if (str.length > longestWord.length) {
//       longestWord = str;
//     }
//   }

//   return longestWord;

// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
//// Поиск самого длинного слова в строке без sort() /////

// Дополни код функции createArrayOfNumbers(min, max) так,
//чтобы она возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));
// Дополни код функции createArrayOfNumbers(min, max) так,
//чтобы она возвращала массив всех целых чисел от значения min до max.

// Задание на пуш определенных элементов массива в новый массив

// function filterArray(numbers, value) {
//   const bigValue = [];
//   for (const number of numbers) {
//     if (number > value) {
//       bigValue.push(number);
//     }
//   }
//   return bigValue;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// Задание на пуш определенных элементов массива в новый массив

// Напиши функцию getCommonElements(array1, array2) которая
//получает два массива произвольной длины в параметры array1 и array2, и
//возвращает новый массив, состоящий из тех элементов, которые присутствуют в
//обоих исходных массивах.
// function getCommonElements(array1, array2) {
//   const uniceElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniceElements.push(element);
//     }
//   }
//   return uniceElements;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// Напиши функцию getCommonElements(array1, array2) которая
//получает два массива произвольной длины в параметры array1 и array2, и
//возвращает новый массив, состоящий из тех элементов, которые присутствуют в
//обоих исходных массивах.xw

// Поиск элементов в массив от start до end
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const correctArr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       correctArr.push(i);
//     }
//   }
//   return correctArr;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// // Поиск элементов в массив от start до end

//Напиши функцию includes(array, value),
// которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.
// function includes(array, value) {

//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Юпитер")
// ); // возвращает true.
// console.log(includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Уран"));
// console.log(includes(["яблоко", "слива", "груша", "апельсин"], "слива"));
// console.log(includes(["яблоко", "слива", "груша", "апельсин"], "киви"));
////Напиши функцию includes(array, value),
// которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.
