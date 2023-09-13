//1
function Age() {
  var age = document.getElementById("myAge");
  let inpu = age.value;

  if (inpu < 18) {
    let c = 18 - inpu;
    console.log(c + " Năm");
    console.log("Bạn Chưa đủ tuổi");
  } else if (inpu >= 18) {
    console.log("Bạn đủ trình để lái");
  }
}
//2
function SoSanh() {
  var myA = document.getElementById("myA");
  let so = myA.value;
  var tao = 25;
  if (so > tao) {
    let c = so - tao;
    console.log("Bạn lớn hơn tôi " + c);
  } else if (so < tao) {
    let d = tao - so;
    console.log("Bạn nhỏ hơn tôi " + d);
  } else if (so == tao) {
    console.log("Bạn bằng tôi");
  }
}
//3
let a = 4;
let b = 3;
if (a > b) {
  console.log(a + " lớn hơn " + b);
} else if (a < b) {
  console.log(a + " nhỏ hơn " + b);
}
//4
function Number() {
  let g = document.getElementById("myN");
  var fo = g.value;
  if (fo % 2 == 0) {
    console.log("Đó là số chẵn " + fo);
  } else {
    console.log("Đó là số lẻ " + fo);
  }
}
