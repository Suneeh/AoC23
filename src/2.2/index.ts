import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let sumPowerOfGames: number = 0;
  data.forEach((gameString) => {
    let minRed: number = 0;
    let minGreen: number = 0;
    let minBlue: number = 0;
    let sets: string[] = gameString.split(": ")[1].split("; ");
    sets.forEach((setString) => {
      let values: string[] = setString.split(", ");
      values.forEach((value) => {
        let numberColor = value.split(" ");
        if (numberColor[1] === "red" && +numberColor[0] > minRed) {
          minRed = +numberColor[0];
        }
        if (numberColor[1] === "green" && +numberColor[0] > minGreen) {
          minGreen = +numberColor[0];
        }
        if (numberColor[1] === "blue" && +numberColor[0] > minBlue) {
          minBlue = +numberColor[0];
        }
      });
    });
    sumPowerOfGames += minRed * minBlue * minGreen;
  });
  return sumPowerOfGames;
}

console.log(solve(testData));
console.log(solve(realData));
