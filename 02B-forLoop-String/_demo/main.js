let str = 'codecamp';
let len = str.length; // 8

console.log(str, len);
// console.log('char index 0 :', str[0]);
// console.log('char index 1 :', str[1]);
// console.log('char index 2 :', str[2]);
// console.log('char index 3 :', str[3]);
// console.log('char index 4 :', str[4]);
// console.log('char index 5 :', str[5]);
// console.log('char index 6 :', str[6]);
// console.log('char index 7 :', str[7]);
// console.log('char index i :', str[i]);

// for (let i = 0; i <= str.length - 1; i++) {
//   console.log(`char index ${i} :`, str[i]);
// }

// i < 8 (Max Possible 7)
// for (let i = 0; i < str.length; i++) {
//   console.log(`char index ${i} :`, str[i]);
// }

// Problem : Print 'C'

for (let i = 0; i < str.length; i++) {
  // IF character == c
  //   then PRINT
  if (str[i] === 'c') {
    console.log(str[i]);
  }

  // if (str[i].includes('c')) {
  //   console.log(str[i]);
  // }
}
