//1
function SolveQuadEquation(a, b, c) {
  let root1, root2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`Phương trình có nghiệm Bậc 2 là ${root1} và ${root2}`);
  } else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`Phương trình có nghiệm Bậc 2 là ${root1} và ${root2}`);
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
      `Phương trình có nghiệm Bậc 2 là ${realPart} + ${imagPart}i và ${realPart} - ${imagPart}i`
    );
  }
}

// console.log(SolveQuadEquation()); // {0}
// console.log(SolveQuadEquation(1, 4, 4)); // {-2}
// console.log(SolveQuadEquation(1, -1, -2)); // {2, -1}
// console.log(SolveQuadEquation(1, 7, 12)); // {-3, -4}
// console.log(SolveQuadEquation(1, 0, -4)); //{2, -2}
// console.log(SolveQuadEquation(1, -1, 0)); //{1, 0}// {-2}
//2
function printArray(elements) {
  console.log(elements);
}

printArray([1, 2, 3, 4, 5]);
//3
function showDateTime() {
  a = new Date("08-01-2020 04:08");
  console.log(a);
}
showDateTime();
//4
function swapValues(a, b) {
  return ([a, b] = [b, a]);
}
//5
function printArray(elements) {
  console.log(elements);
}

printArray([1, 2, 3, 4, 5].reverse());
//6
function CapitalizeArray(elements) {
  return elements;
}

printArray(["chim", "lon", "meo", "cho", "ga"].toLocaleString().toUpperCase());
//7

let arr = "TEXT";
function addItem(elements) {
  let c = [];
  c.push(elements);
  console.log(c);
}
addItem(arr);
//8
let t = [1, 2, 3, 4, 5];
function RemoveItem(elements) {
  var d = elements.pop();
  console.log(d);
  return d;
}
RemoveItem(t);
//9
function EvensAndOdds(number) {
  if (number % 2 == 0) {
    console.log("Số chẵn");
  } else {
    console.log("số lẻ");
  }
}
EvensAndOdds(100);
//13
function tinh_tong(number) {
  var tong = 0;
  for (so in number) {
    tong += so;
  }
  return tong;
}
console.log(tinh_tong(1, 5, 1));
