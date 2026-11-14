function rotateArray(arr, k) {
  const n = arr.length;
  let rotationNum = k % n;
  let newArrPart1 = [];
  let newArrPart2 = [];
  let newArrResult = [];
  if (n === k) console.log(arr.join(' '));
  else {
    newArrPart1 = arr.slice(rotationNum, n);
    newArrPart2 = arr.slice(0, rotationNum);
  }
  newArrResult = newArrPart1.concat(newArrPart2);
  console.log(newArrResult.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
//	32 61 21 51 47

rotateArray([32, 21, 61, 1], 4);
//	32 21 61 1

rotateArray([2, 4, 15, 31], 5);
//	4 15 31 2
