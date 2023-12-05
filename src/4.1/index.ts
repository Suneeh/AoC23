import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let points: number = 0;
  data.forEach((gameString) => {
    let amountWinningNumbers = 0;
    let winningNumbers = gameString.split("|")[0].split(":")[1].match(/\d+/gm);
    let myNumbers = gameString.split("|")[1].match(/\d+/gm);
    myNumbers!.forEach((num) => {
      let isWinning = winningNumbers!.findIndex(
        (winningNum) => winningNum == num
      );
      if (isWinning != -1) {
        amountWinningNumbers += 1;
      }
    });
    if (amountWinningNumbers > 0) {
      points += 1 * Math.pow(2, amountWinningNumbers - 1);
    }
  });
  return points;
}

console.log(solve(testData));
console.log(solve(realData));
