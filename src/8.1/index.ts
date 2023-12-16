import { realData, testData, testData2 } from "./testdata";

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
    let grouping = line.match(/(\w{3}) = \((\w{3}), (\w{3})\)/);
    if (grouping) {
      return (map[grouping[1]] = { L: grouping[2], R: grouping[3] });
    }
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
