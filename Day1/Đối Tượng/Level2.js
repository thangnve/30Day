const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };
  //1
  // const fun = (userList) => {
  //   let max = 0;
  //   for (const key in userList) {
  //     max = Math.max(users[key].skills.length, max);
  //   }
  //   return max;
  // };
  // console.log(fun(users));
  //2
  // const funx = (userList) => {
  //   let max = 0;
  //   for (const key in userList) {
  //     max += users[key].isLoggedIn == true;
  //   }
  //   return max;
  // };
  // console.log(funx(users));
  
  // const funx = (userList) => {
  //   let max = 0;
  //   for (const key in userList) {
  //     max += users[key].points > 50;
  //   }
  //   return max;
  // };
  // console.log(funx(users));
  //3 Tìm những người là nhà phát triển ngăn xếp MERN từ đối tượng người dùng (không hiểu )
  //4
  // users.Thang = {
  //   email: "john@john.com",
  //   skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
  //   age: 20,
  //   isLoggedIn: true,
  //   points: 50,
  // };
  
  // console.log(users);
  //5
  // const funx = (userList) => {
  //   let max = "";
  //   for (const key in userList) {
  //     max = users[key].skills;
  //   }
  //   return max;
  // };
  // console.log(funx(users));
  //6
  // const funx = (userList) => {
  //   let max = "";
  //   for (const key in userList) {
  //     max = users[key];
  //   }
  //   return max;
  // };
  // console.log(funx(users));
  //7
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
  
  var tien = countriesData.reduce(function (index, chi) {
    return (index +=
      chi.name +
      " " +
      chi.capital +
      " " +
      chi.languages +
      " " +
      chi.population +
      " |");
  }, []);
  
  console.log(tien);
  