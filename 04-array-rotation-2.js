function rotateArray(arr, k) {
  const n = arr.length;
  let rotationNum = k % n;
  let newArrPart1 = [];
  let newArrPart2 = [];
  let newArrResult = [];
  if (n === k) console.log(arr.join(' '));
  else {
    for (let i = rotationNum; i < arr.length; i++) {
      newArrPart1.push(arr[i]);
    }
    for (let i = 0; i < rotationNum; i++) {
      newArrPart2.push(arr[i]);
    }
    newArrResult = newArrPart1.concat(newArrPart2);
    console.log(newArrResult.join(' '));
  }
}

rotateArray([51, 47, 32, 61, 21], 2);
//	32 61 21 51 47

rotateArray([32, 21, 61, 1], 4);
//	32 21 61 1

rotateArray([2, 4, 15, 31], 5);
//	4 15 31 2
