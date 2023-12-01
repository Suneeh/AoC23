import { realData, testData } from "./testdata";
import { first, last } from "lodash";

function solve(data: string[]): number {
  let result: number = 0;
  const vals = [
    "fooo bar",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  data.forEach((str) => {
    let firstDigit = first(str.match(`[0-9]|${vals.join("|")}`)) ?? "";
    if (isNaN(+firstDigit)) firstDigit = vals.indexOf(firstDigit).toString();

    let lastDigit = last(str.match(`.*([0-9]|${vals.join("|")}).*`)) ?? "";
    if (isNaN(+lastDigit)) lastDigit = vals.indexOf(lastDigit).toString();

    result += +`${firstDigit}${lastDigit}`;
  });
  return result;
}

console.log("The function should return 281:", 281 === solve(testData));
console.log(
  "The solution calculated with the sample data is:",
  solve(realData)
);
