import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let points: number = 1;
  let time = data[0].split(":")[1].replace(/ /g, "");
  let distance = data[1].split(":")[1].replace(/ /g, "");
  let winCounter = 0;

  if (time && distance) {
    for (let j = 1; j < +time; j++) {
      // j being the time the button is pressed
      // j is also representing the speed
      let timeToDrive = +time - j;
      let distanceDriven = timeToDrive * j;
      if (distanceDriven > +distance) {
        winCounter++;
      }
    }
  }
  points *= winCounter;

  return points;
}

//console.log(solve(testData));
console.log(solve(realData));
