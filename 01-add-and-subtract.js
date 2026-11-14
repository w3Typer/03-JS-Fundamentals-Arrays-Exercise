function addIndexToArrEl(arr) {
  let modified = ' ';
  let newEl = 0;
  let arrSum = 0;
  let modifiedArrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
    if (arr[i] % 2 === 0) {
      newEl = arr[i] + i;
    } else {
      newEl = arr[i] - i;
    }
    if (i === arr.length - 1) {
      modified += newEl + ' ';
    } else {
      modified += newEl + ', ';
    }
    modifiedArrSum += newEl;
  }

  console.log(`[${modified}]`);
  console.log(arrSum);
  console.log(modifiedArrSum);
}

addIndexToArrEl([5, 15, 23, 56, 35]);
// [ 5, 14, 21, 59, 31 ]
// 134
// 130

addIndexToArrEl([-5, 11, 3, 0, 2]);
// [ -5, 10, 1, 3, 6 ]
// 11
// 15
