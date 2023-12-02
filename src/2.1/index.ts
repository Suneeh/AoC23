import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let sumPossibleGames: number = 0;
  data.forEach((gameString, gameNr) => {
    let gameIsPossible: boolean = true;
    let sets: string[] = gameString.split(": ")[1].split("; ");
    sets.forEach((setString) => {
      let values: string[] = setString.split(", ");
      values.forEach((value) => {
        let numberColor = value.split(" ");
        if (
          (numberColor[1] === "blue" && +numberColor[0] > 14) ||
          (numberColor[1] === "green" && +numberColor[0] > 13) ||
          (numberColor[1] === "red" && +numberColor[0] > 12)
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

console.log(solve(testData));
console.log(solve(realData));
