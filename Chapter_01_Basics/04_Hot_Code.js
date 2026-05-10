const users = [
  { name: "Rahul", age: 20 },
  { name: "Aman", age: 25 },
  { name: "Riya", age: 22 }
];

const result = users
  .filter(user => user.age > 21)
  .map(user => user.name);

console.log(result);