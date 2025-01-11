console.log(
  "<!-- Я не списую,я просто захотів коментарями зробити завдання зрозумілішими, тому що в минулому завданні було дуже багато масивів  (╥_╥) -->"
);
// Task 1
const bankAccounts = [
  { id: "001", name: "Artemchik", balance: 100000 },
  { id: "002", name: "Lerchik", balance: 50000 },
  { id: "003", name: "Natalia", balance: 99999 },
  { id: "004", name: "Vlad", balance: 70000 },
  { id: "005", name: "Kiril", balance: 40000 },
  { id: "006", name: "Dima", balance: 30000 },
  { id: "007", name: "Vika", balance: 20000 },
  { id: "008", name: "Maxim", balance: 10000 },
];

const totalBalance = bankAccounts.reduce((acc, bankAccount) => {
  return acc + bankAccount.balance;
}, 0);
console.log("<!-- Загальний баланс -->");
console.log(totalBalance);
// Task 2
const allMyFriends = [
  { name: "Max", age: 15, friends: ["Lera", "Henri", "Artem"] },
  { name: "Nazar", age: 20, friends: ["Max", "Dima"] },
  { name: "Artem", age: 20, friends: ["Nazar", "Dima"] },
  { name: "Lera", age: 18, friends: ["Max", "Henri"] },
  { name: "Henri", age: 22, friends: ["Lera", "Artem"] },
  { name: "Dima", age: 21, friends: ["Nazar", "Artem"] },
  { name: "Vika", age: 19, friends: ["Max", "Lera"] },
  { name: "Kiril", age: 23, friends: ["Henri", "Dima"] },
  { name: "Natalia", age: 25, friends: ["Vika", "Kiril"] },
  { name: "Vlad", age: 24, friends: ["Natalia", "Maxim"] },
  { name: "Maxim", age: 26, friends: ["Vlad", "Kiril"] },
];

const findFriendsByName = (allFriends, friendName) => {
  return allFriends
    .filter(({ friends }) => friends.includes(friendName))
    .map((friend) => friend.name);
};
console.log("<!-- Друзі з Максом-->");
console.log(findFriendsByName(allMyFriends, "Max"));
console.log("<!-- Друзі з Валерією -->");
console.log(findFriendsByName(allMyFriends, "Lera"));
console.log("<!-- Друзі з Максимом -->");
console.log(findFriendsByName(allMyFriends, "Maxim"));
// Task 3
const friends = [
  { name: "Miko", friends: ["Bob", "Natali"] },
  { name: "Bob", friends: ["Natali", "Miko", "Charlie"] },
  { name: "Charlie", friends: ["Artemiy", "Frank"] },
  { name: "Frank", friends: ["Miko"] },
  { name: "Janet", friends: ["Bob", "David", "Charlie"] },
  { name: "Vasily", friends: ["Charlie", "Janet"] },
  { name: "Natali", friends: ["Vasily", "Frank", "Artemiy"] },
  { name: "Artemiy", friends: ["Bob", "Artemiy", "Vasily", "Natali"] },
];

console.log("<!-- Розфасовані друзі по name -->");
const sortedFriendsWithName = friends
  .sort((a, b) => a.friends.length - b.friends.length)
  .map((friend) => friend.name);
console.log(sortedFriendsWithName);
console.log("<!-- Розфасовані друзі по object в масиві-->");
const sortedFriends = friends.sort(
  (a, b) => a.friends.length - b.friends.length
);
console.log(sortedFriends);
// Task 4
const peoples = [
  {
    name: "Artem",
    age: 16,
    skills: ["Dancing", "Singing", "Horse Riding", "Surfing"],
  },
  {
    name: "Max",
    age: 14,
    skills: ["Football", "Surfing", "Building", "Cycling"],
  },
  {
    name: "Dima",
    age: 17,
    skills: ["Singing", "Building", "Swimming", "Music"],
  },
];

const allSkills = peoples.reduce((acc, person) => {
  person.skills.forEach((skill) => {
    if (!acc.includes(skill)) {
      acc.push(skill);
    }
  });
  return acc;
}, []);

console.log(
  allSkills.sort((prevName, nextName) => {
    return prevName.localeCompare(nextName);
  })
);
