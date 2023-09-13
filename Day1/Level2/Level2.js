//2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(text.split(" "));
//3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart.unshift("Mean"));
console.log(shoppingCart.push("SugarBaby"));
console.log(shoppingCart.splice(4, 1));
console.log(shoppingCart.splice(3, 1, "Tea Green"));
console.log(shoppingCart);
//4
const countriesData = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Ethiopia",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
];
function check(countris) {
  return countris.name == "Ethiopia";
}
function check2(countris) {
  return countris.name != "Ethiopia";
}

if (countriesData.filter(check)) {
  console.log("Ethiopia");
}

if (countriesData.filter(check2)) {
  countriesData.push("Ethiopia");
}
console.log(countriesData);
//5
const webTechs = [
  {
    name: "Sass",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Ethiopia",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
];
function checkw1(web_techs) {
  return web_techs.name == "Sass";
}
function checkw2(web_techs) {
  return web_techs.name != "Sass";
}

if (webTechs.filter(checkw1)) {
  console.log("Sass là tiền xử lý CSS");
}

if (webTechs.filter(checkw2)) {
  webTechs.push("SASS");
}
console.log(webTechs);
//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
