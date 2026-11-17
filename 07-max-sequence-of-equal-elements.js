function printMaxEqualElsSequence(arr) {
  let repetitions = 1;
  let maxRepetitions = 1;
  let repetedElement;
  let newRepeatedElement;
  let repetedElsArr = [];
  let i = arr.length - 1;

  while (i >= 1) {
    if (arr[i] !== arr[i - 1]) {
      i--;
      repetitions = 1;
    } else {
      newRepeatedElement = arr[i];
      repetitions++;
      i--;
    }

    if (maxRepetitions <= repetitions) {
      maxRepetitions = repetitions;
      repetedElement = newRepeatedElement;
    }
  }

  for (let k = 1; k <= maxRepetitions; k++) {
    repetedElsArr.push(repetedElement);
  }

  console.log(repetedElsArr.join(' '));
}

printMaxEqualElsSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//	2 2 2
printMaxEqualElsSequence([1, 1, 1, 2, 3, 1, 3, 3]);
//	1 1 1
printMaxEqualElsSequence([4, 4, 4, 4]);
//	4 4 4 4
printMaxEqualElsSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
//	1 1
