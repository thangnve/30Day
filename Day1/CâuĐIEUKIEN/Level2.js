//1
function Ma() {
  let a = document.getElementById("myC");
  let b = a.value;

  if (b > 80) {
    console.log("Bạn đạt loại A");
  } else if (b > 70) {
    console.log("Bạn đạt loại B");
  } else if (b > 60) {
    console.log("Bạn đạt loại C");
  } else if (b > 50) {
    console.log("Bạn đạt loại D");
  } else if (b >= 0) {
    console.log("Bạn đạt loại F");
  } else if (b > 100) {
    console.log("Đây không phải điểm ");
  }
}
//2
// function Md() {
//   let c = document.getElementById("myD");
//   let d = c.value;

//   if (d >= 3 && d <= 5) {
//     console.log("Mùa Xuân");
//   } else if (d >= 6 && d <= 8) {
//     console.log("Mùa Hè");
//   } else if (d >= 9 && d <= 11) {
//     console.log("Mùa Thu");
//   } else {
//     console.log("Mùa Đông");
//   }
// }
//3
function Md() {
  let c = document.getElementById("myD");
  let d = c.value;

  switch (d) {
    case "monday":
      console.log(" Monday is a working day.");
      break;
    case "tuesday":
      console.log("Tuesday is a working day.");
      break;
    case "wednesday":
      console.log("Wednesday is a working day.");
      break;
    case "thursday":
      console.log("Thursday is a working day.");
      break;
    case "friday":
      console.log("Friday is a working day.");
      break;
    case "saturday":
      console.log("Saturday is a weekend.");
      break;
    case "sunday":
      console.log("Sunday is a weekend.");
      break;
    default:
      console.log("It is not a week day.");
  }
}
