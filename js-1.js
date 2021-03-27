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
function formatMessage(message, maxLength) {
  let result;
  //   Пиши код ниже этой строки
  result =
    message.length > maxLength
      ? message.slice(0, maxLength.length) + "..."
      : message;

  // Пиши код выше этой строки
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
