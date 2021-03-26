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
let total = 0;
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = [...num1, ...num2];
for (const num of num3) {
  total += num;
}

console.log(total);
num1.splice(3, 0, 4, 5, 6);
console.log(num1);
