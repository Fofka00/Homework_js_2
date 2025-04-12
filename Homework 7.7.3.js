const users = [
  { name: "Renat", age: 17 },
  { name: "Boba", age: 25 },
  { name: "Yondu", age: 19 },
  { name: "Basta", age: 16 },
  { name: "Ahmed", age: 30 }
];

const adults = users.filter(user => user.age >= 18);

const adultNames = adults.map(user => user.name);

console.log("Взрослые пользователи:", adults);
console.log("Имена взрослых пользователей:", adultNames);