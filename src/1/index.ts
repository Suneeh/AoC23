import { realData, testData } from "./testdata";

function solve(data: string[]) {
  let result: number = 0;
  data.forEach((str) => {
    let digitOnly: string = str.replace(/([^0-9])/g, "");
    result += +`${digitOnly.charAt(0)}${digitOnly.slice(-1)}`;
  });
  console.log(result);
}

solve(testData);
solve(realData);
