// console.log('#');
// console.log('#');
// console.log('#');
// console.log('#');

// SYNTAX : if () {}
// SYNTAX : function () {}

// SYNTAX : for () {}

for (let count = 1; count <= 3; count++) {
  // code run if count <= 3
  // console.log('#');
}

// Print ทุกเลข
// for (let n = 1; n <= 100; n++) {
//   console.log(n); // 1,2,3,4,5
// }

// Print เลขคู่
// for (let n = 1; n <= 20; n++) {
//   /*
// 		IF even number
// 			PRINT
// 		ELSE
// 			NOT PRINT
// 	*/
//   if (n % 2 === 0) {
//     console.log(n);
//   }
// }

// Print เลขคู่
for (let n = 2; n <= 20; n += 2) {
  // console.log(n);
}

// Problem ต้องการผลรวมเลข 1จนถึง 10

let a = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log('A', a);

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   let sum = 0; // ตัวแปรถูกประกาศใหม่ทุกตรั้งที่ loop 1 รอบ
//   sum += i;
//   console.log(`รอบที่ ${i}`, sum);
// }
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log(`รอบที่ ${i}`, sum);
}

// Problem
