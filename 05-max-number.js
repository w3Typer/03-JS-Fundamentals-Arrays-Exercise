function printTopIntegers(arr) {
  let resultArr = [];
  let comparedNum;
  let isTopInteger = true;
  for (let i = 0; i < arr.length; i++) {
    comparedNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (comparedNum < arr[j]) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger && !resultArr.includes(comparedNum)) {
      resultArr.push(comparedNum);
    }
    isTopInteger = true;
  }
  console.log(resultArr.join(' '));
}

printTopIntegers([1, 4, 3, 2]);
//	4 3 2

printTopIntegers([14, 24, 3, 19, 15, 17]);
//	24 19 17

printTopIntegers([41, 41, 34, 20]);
//	41 34 20
