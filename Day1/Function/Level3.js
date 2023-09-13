//1
// let id = prompt("Nhap ID");
// let SoL = prompt("Nhap SL");
function ggg() {
  let result = [];
  for (let x = 0; x < SoL; x++) {
    let hexDigits = "0123456789ABCDEF";
    let randomHex = "";
    for (var i = 0; i < id; i++) {
      randomHex += hexDigits.charAt(
        Math.floor(Math.random() * hexDigits.length)
      );
    }
    result.push("#" + randomHex);
  }
  return result.map((ss) => ss.trim());
}

//2
function generateColors(type, n) {
  let result = [];
  for (let x = 0; x < n; x++) {
    if (type === "rgb") {
      let num = Math.round(0xffffff * Math.random());
      let r = num >> 16;
      let g = (num >> 8) & 255;
      let b = num & 255;
      result.push("rgb(" + r + ", " + g + ", " + b + ")");
    } else if (type === "hexa") {
      let hexDigits = "0123456789ABCDEF";
      let randomHex = "";
      for (var i = 0; i < 6; i++) {
        randomHex += hexDigits.charAt(
          Math.floor(Math.random() * hexDigits.length)
        );
      }
      result.push(randomHex);
    } else {
      console.log("type not applicable");
    }
  }
  return result;
}
// console.log("rgb", generateColors("rgb", 3));
// console.log("hex", generateColors("hexa", 3));
//3
function shuffleArray(element) {
  var ctr = element.length;
  var temp = [];
  var index = [];
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = element[ctr];
    element[ctr] = element[index];
    element[index] = temp;
  }
  return element;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray(myArray));
//4
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(5));
//5
function isEmpty(element) {
  var array = ["Sushi", "Kamen", "OCC", "shit"];
  return array.includes(element);
}
console.log(isEmpty("Sushi"));
//6
function Average(element) {
  let sum = 0;
  let avg = 0;
  for (const shit of element) {
    sum += shit;
  }
  avg = sum / element.length;
  return avg.toFixed(2);
}
var array = [8, 4, 5, 6, 1, 2, 5];
console.log(Average(array));
//
