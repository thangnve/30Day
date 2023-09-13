const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: 0 },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: 0 },
];
//
let sum = 0;
let array = [];
products.forEach((number) => {
  console.log(`The price of ${number.product} is ${number.price} euros.`);
  sum += number.price;
});
console.log(sum);

products.map((ss) => {
  array.push(ss.price);
});
console.log(array);
let mang = [];
function produc(element) {
  element == products.map((ss) => ss.product);
  if (element == "banana") {
    return "price 3";
  } else if (element == "mango") {
    return "price 6";
  } else if (element == "potato") {
    return "unknow";
  } else if (element == "avocado") {
    return "price 8";
  } else if (element == "coffe") {
    return "price 10";
  } else if (element == "tea") {
    return "unknow";
  }
}
console.log(produc("banana"));
let cx = 0;
products.map((ss) => {
  return (cx += ss.price);
});
// console.log(cx);
products.filter(function (d) {
  return (cx += d.price);
});
// console.log(cx);
products.reduce(function (dss, pro) {
  return (dss += pro.price);
});
var shit = products.find(function (d) {
  return d.price == 0;
});
console.log(shit);

function su(element) {
  element == products.map((ss) => ss.price);
  if (element == 0) {
    return products.filter((ss) => ss.price == 0);
  } else if (element > 0) {
    return products.filter((ss) => ss.price >= 0);
  }
}
su(3);
