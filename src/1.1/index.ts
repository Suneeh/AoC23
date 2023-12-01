import { realData, testData } from "./testdata";

function solve(data: string[]): number {
  let result: number = 0;
  data.forEach((str) => {
    let digitOnly: string = str.replace(/([^0-9])/g, "");
    result += +`${digitOnly.charAt(0)}${digitOnly.slice(-1)}`;
  });
  return result;
}

console.log("The function should return 142:", 142 === solve(testData));
console.log(
  "The solution calculated with the sample data is:",
  solve(realData)
);
