//1
function fullName(FirstName, LastName) {
  return FirstName + LastName;
}

console.log(fullName("Nguyễn", "Thắng"));
//2
function addNumbers(F, L) {
  return F + L;
}

console.log(addNumbers(5, 4));
//3
function _areaOfCircle(No2, Pi) {
  let No1 = No2 * No2 * Pi;
  return No1;
}
//em không nhớ công thức
console.log(_areaOfCircle(5, 3.14));
//4
function ConvertCelciusToFahrenheit(oF, oC) {
  return (oF += (oC * 9) / 5 + 32);
}
//5
// Chỉ số khối cơ thể (BMI) được tính như sau: bmi = cân nặng tính bằng Kg / (chiều cao x chiều cao) tính bằng m2 . Viết hàm tính chỉ số bmi . BMI được sử dụng để xác định rộng rãi các nhóm cân nặng khác nhau ở người lớn từ 20 tuổi trở lên. Kiểm tra xem một người có cân nặng thấp, bình thường, thừa cân hay béo phì hay không dựa trên thông tin đưa ra dưới đây.

// Các nhóm tương tự áp dụng cho cả nam và nữ.
// Thiếu cân : BMI dưới 18,5
// Cân nặng bình thường : BMI từ 18,5 đến 24,9
// Thừa cân : BMI từ 25 đến 29,9
// Béo phì : BMI từ 30 trở lên
//6
function checkSeason(number) {
  if (number >= 3 && number <= 5) {
    return "Mùa Xuân";
  } else if (number >= 6 && number <= 8) {
    return "Mùa Hè";
  } else if (number >= 9 && number <= 11) {
    return "Mùa Thu";
  } else {
    return "Mùa Đông";
  }
}

