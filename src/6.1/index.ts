import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let points: number = 1;
  let times = data[0].split(":")[1].match(/\d+/gm);
  let distances = data[1].split(":")[1].match(/\d+/gm);
  if (times && distances) {
    for (let i = 0; i < times.length; i++) {
      let winCounter = 0;
      let time = +times[i];
      let distance = +distances[i];
      for (let j = 1; j < time; j++) {
        // j being the time the button is pressed
        // j is also representing the speed
        let timeToDrive = time - j;
        let distanceDriven = timeToDrive * j;
        if (distanceDriven > distance) {
          console.log(time, distance, i, j);
          winCounter++;
        }
      }
      points *= winCounter;
    }
  }
  return points;
}

console.log(solve(testData));
console.log(solve(realData));
