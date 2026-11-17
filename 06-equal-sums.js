function checkEqualSums(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let equalSumsIndex = 0;
  let equalSumsExist = false;

  if (arr.length === 1) {
    console.log(0);
    return;
  }

  if (arr.length === 2) {
    console.log('no');
    return;
  }

  for (let i = 1; i <= arr.length - 2; i++) {
    for (let leftIndex = 0; leftIndex < i; leftIndex++) {
      leftSum += arr[leftIndex];
    }
    for (let rightIndex = i + 1; rightIndex <= arr.length - 1; rightIndex++) {
      rightSum += arr[rightIndex];
    }

    if (leftSum === rightSum) {
      equalSumsIndex = i;
      equalSumsExist = true;
      break;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }
  if (equalSumsExist) {
    console.log(equalSumsIndex);
  } else {
    console.log('no');
  }
}

checkEqualSums([1, 2, 3, 3]);
// 2

checkEqualSums([1, 2]);
// no

checkEqualSums([1]);
// 0

checkEqualSums([1, 2, 3]);
// no

checkEqualSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
// 3
