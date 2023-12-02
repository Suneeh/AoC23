import { realData, testData } from "./testdata";

function solve(
  data: string[],
  red: number,
  green: number,
  blue: number
): number {
  let sumPossibleGames: number = 0;
  data.forEach((gameString, gameNr) => {
    let gameIsPossible: boolean = true;
    let sets: string[] = gameString.split(": ")[1].split("; ");
    sets.forEach((setString) => {
      let values: string[] = setString.split(", ");
      values.forEach((value) => {
        let numberColor = value.split(" ");
        if (
          (numberColor[1] === "blue" && +numberColor[0] > blue) ||
          (numberColor[1] === "green" && +numberColor[0] > green) ||
          (numberColor[1] === "red" && +numberColor[0] > red)
        ) {
          gameIsPossible = false;
        }
      });
    });
    if (gameIsPossible) {
      sumPossibleGames += gameNr + 1;
    }
  });
  return sumPossibleGames;
}

console.log(solve(testData, 12, 13, 14));
console.log(solve(realData, 12, 13, 14));
