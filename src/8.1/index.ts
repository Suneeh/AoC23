import { realData, testData, testData2 } from "./testdata";
import { first, last } from "lodash";

interface mapEntry {
  L: string;
  R: string;
}
interface map {
  [point: string]: mapEntry;
}

function solve(data: string[]): number {
  // Preparing Dictionary for the Map
  let map: map = {};
  data.map((line) => {
    let point = line.split("=")[0].trim();
    let l = first(line.match(/\((.*),/))?.slice(1, 4);
    let r = first(line.match(/,(.*)\)/))?.slice(2, 5);
    if (l && r) return (map[point] = { L: l, R: r });
  });

  let steps: number = 0;
  let directionString = data[0];
  let currentPoint = "AAA";
  while (currentPoint != "ZZZ") {
    // Check if the direction string is long enough
    if (steps == directionString.length) {
      directionString += directionString;
    }
    // Get next point on the map
    let direction = directionString[steps];
    currentPoint = direction == "L" ? map[currentPoint].L : map[currentPoint].R;
    steps++;
  }
  return steps;
}

console.log(solve(testData));
console.log(solve(testData2));
console.log(solve(realData));
