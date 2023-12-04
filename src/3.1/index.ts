import { asdfData, realData, testData } from "./testdata";

interface NumberString {
  start: number;
  end: number;
  value: number;
}

function solve(data: string[]): number {
  let sumOfPartNumbers: number = 0;
  // check first line
  var numbersInRow: NumberString[] = getNumberPosition(data, 0);
  numbersInRow.forEach((touple) => {
    if (
      checkRowForSymbols(data, 0, touple.start, touple.end) ||
      checkRowForSymbols(data, 1, touple.start, touple.end)
    ) {
      sumOfPartNumbers += touple.value;
    }
  });
  // check all lines in between
  for (let i = 1; i < data.length - 1; i++) {
    numbersInRow = getNumberPosition(data, i);
    numbersInRow.forEach((touple) => {
      if (
        checkRowForSymbols(data, i - 1, touple.start, touple.end) ||
        checkRowForSymbols(data, i, touple.start, touple.end) ||
        checkRowForSymbols(data, i + 1, touple.start, touple.end)
      ) {
        sumOfPartNumbers += touple.value;
      }
    });
  }

  // check last line
  numbersInRow = getNumberPosition(data, data.length - 1);
  numbersInRow.forEach((touple) => {
    if (
      checkRowForSymbols(data, data.length - 2, touple.start, touple.end) ||
      checkRowForSymbols(data, data.length - 1, touple.start, touple.end)
    ) {
      sumOfPartNumbers += touple.value;
    }
  });
  return sumOfPartNumbers;
}

function getNumberPosition(data: string[], rowIndex: number): NumberString[] {
  let regex = /\d+/g;
  let row = data[rowIndex];
  let results = row.matchAll(regex);
  let run = true;
  let resultArr: NumberString[] = [];
  while (run) {
    let match = results.next();
    if (match.value) {
      let start = match.value.index;
      let end = start + match.value[0].length - 1;
      resultArr.push({
        start: start,
        end: end,
        value: +match.value[0],
      });
    }
    if (match.done == true) run = false;
  }

  return resultArr;
}

function checkRowForSymbols(
  data: string[],
  rowIndex: number,
  positionStart: number,
  positionEnd: number
): boolean {
  let row = data[rowIndex];
  let start = positionStart === 0 ? 0 : positionStart - 1;
  let end = positionEnd === row.length - 1 ? positionEnd : positionEnd + 1;
  for (let i = start; i <= end; i++) {
    let result = row[i].match("[^a-zA-Z0-9.]");
    if (result != null) {
      return true;
    }
  }

  return false;
}

console.log(solve(testData));
console.log(solve(asdfData));
console.log(solve(realData));
