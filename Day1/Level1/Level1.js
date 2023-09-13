// Khai báo một mảng trống ;
// Khai báo một mảng có số phần tử lớn hơn 5
// Tìm độ dài của mảng của bạn
// Lấy mục đầu tiên, mục giữa và mục cuối cùng của mảng
// Khai báo một mảng có tên làmixDataTypes , đặt các kiểu dữ liệu khác nhau vào mảng và tìm độ dài của mảng. Kích thước mảng phải lớn hơn 5
// Khai báo một biến mảng tên itCompanies và gán giá trị ban đầu Facebook, Google, Microsoft, Apple, IBM, Oracle và Amazon
// In mảng bằng console.log()
// In số lượng công ty trong mảng
// In công ty đầu tiên, công ty giữa và công ty cuối cùng
// In ra từng công ty
// Thay đổi từng tên công ty thành chữ hoa và in chúng ra
// In mảng như một câu: Facebook, Google, Microsoft, Apple, IBM,Oracle và Amazon là những công ty CNTT lớn.
// Kiểm tra xem một công ty nhất định có tồn tại trong mảng itCompanies hay không. Nếu nó tồn tại thì trả lại công ty, nếu không thì trả lại không tìm thấy công ty
// Lọc ra các công ty có nhiều hơn một chữ 'o' mà không có phương pháp lọc
// Sắp xếp mảng bằng phương thức Sort()
// Đảo ngược mảng bằng phương thức Reverse()
// Loại bỏ 3 công ty đầu tiên khỏi mảng
// Cắt bỏ 3 công ty cuối cùng khỏi mảng
// Loại bỏ các công ty CNTT trung gian khỏi mảng
// Xóa công ty CNTT đầu tiên khỏi mảng
// Xóa công ty CNTT trung gian hoặc các công ty khỏi mảng
// Xóa công ty CNTT cuối cùng khỏi mảng
// Xóa tất cả các công ty CNTT
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const arr = [];
const lemon = ["Cá Chép", "Cá Lục", "Cá Rô", "Cá Chắm", "Cá Phi"];
console.log(lemon.length);
console.log(lemon.slice(0, 1));
console.log(lemon.slice(2, 3));
console.log(lemon.slice(4, 5));
const mixedDataTypes = [
  "SuperIdol",
  241,
  true,
  { sudo: ["Liên Minh", "Huyền Thoại"] },
  [
    ["Tiền", "Thuốc"],
    [258, 264, 214],
  ],
];
console.log(mixedDataTypes.length);
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle và Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies.slice(0, 1));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.slice(6, 7));
console.log(itCompanies[3]); //123456
console.log(itCompanies.join() + "là những công ty CNTT lớn nhất");
let congty = itCompanies.indexOf("Apple");
if (congty != -1) {
  console.log("Công Ty");
} else {
  console.log("Công Ty Không Tồn Tại");
}
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(2, 5));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.shift());
console.log(itCompanies.splice(2, 1));
console.log(itCompanies.pop());

