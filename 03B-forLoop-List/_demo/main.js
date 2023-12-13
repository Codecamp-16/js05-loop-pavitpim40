const friends = ['Tu', 'pom', 'Tony', 'jerry', 'Tom'];
// 5 คน len = 5
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[5]);

// i = 0 (Possible 0,1,2,3,4)
// i < 5
// for (let i = 0; i < friends.length; i++) {
//   console.log(i, friends[i]);
// }

// Only T Friend
// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].toLowerCase().includes('t')) {
//     console.log(i, friends[i]);
//   }
// }

const todoList = ['HW JS', 'Dinner', 'Shower', 'Game', 'Grab', 'Eat', 'Sleep'];

// for (let i = 0; i < todoList.length; i++) {
//   console.log(`รายการที่ ${i + 1} :`, todoList[i]);
// }

const cart = [99, 4990];

let sum = 0;
// sum += cart[0];
// sum += cart[1];
// sum += cart[2];
// sum += cart[3];
// console.log(sum);

for (let i = 0; i < cart.length; i++) {
  // console.log(cart[i]);
  sum += cart[i];
}

console.log(sum);
