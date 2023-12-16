import { realData, testData, testData2 } from "./testdata";

function solve(data: string[]): number {
  let sum = 0;
  for (const line of data) {
    let numList: number[] = line.split(" ").map(Number);
    let matrix = [numList];
    let row = 0;
    while (true) {
      matrix[row + 1] = [];
      for (let i = 0; i < matrix[row].length - 1; i++) {
        matrix[row + 1][i] = matrix[row][i + 1] - matrix[row][i];
      }
      row++;
      if (matrix[row].every((x) => x == 0)) {
        break;
      }
    }
    console.log(matrix);
    let n = 0;
    for (let i = matrix.length - 1; i > 0; i--) {
      n = n + matrix[i][matrix[i].length - 1];
    }
    sum += matrix[0][matrix[0].length - 1] + n;
  }
  return sum;
}

//console.log(solve(testData));
console.log(solve(realData));
