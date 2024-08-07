let arr = [1, 2, 3, 4, 5, 6];

// let arr2 = new Array();
// for (var i = 0; i < arr.length; i++) {
//   arr2.push(arr[i] + 5);
// }
// console.log(arr2);

const arr2 = arr.map((value) => value + 5);

// console.log(arr2);

const arr3 = arr.filter((value) => value % 2 === 0);

console.log(arr3);
