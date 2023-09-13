//1
const PersonAccount = {
  firstName: "",
  LasstName: "",
  thunhap: {
    thunhap: "",
    mota: "",
    chiphi: "",
  },
  chiphi: "",
  Totalincome: function () {},
  TotalExpense: function () {},
  accountInfo: function () {},
  addIncome: function () {},
  addExpense: function () {},
  accountBalance: function () {},
};
//2
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function SignUp() {}
function SignIn() {}
//3
//a
var rate = products.reduce(function (index, reta) {
  return (index +=
    reta.name + " có " + reta.ratings.map((shi) => shi.rate + " Sao") + " |");
}, []);

console.log(rate);
//b
if (products.map((ras) => ras.ratings.map((si) => si.rate) <= 4)) {
  console.log("Trung Bình");
}
//4
function likeProduct() {
  let like = products.map((ss) => (ss.likes ? true : false));
  if (like == true) {
    console.log("Gỡ Thích");
  } else if (like == false) {
    console.log("Thích");
  }
}
