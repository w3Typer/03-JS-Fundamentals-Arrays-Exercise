function printCommonElements(arr1, arr2) {
  let commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr1[i]);
        break;
      }
    }
  }
  for (let k = 0; k < commonElements.length; k++) {
    console.log(commonElements[k]);
  }
}

printCommonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2'],
);
//hello
//4
printCommonElements(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l'],
);
//o
//i
