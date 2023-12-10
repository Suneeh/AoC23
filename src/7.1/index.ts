import { hands, cards, realData, testData } from "./testdata";

interface Hand {
  hand: string;
  bet: number;
  prio: number;
}

function solve(data: string[]): number {
  let points: number = 0;
  let hands: Hand[] = [];
  data.forEach((gameString) => {
    let hand = gameString.split(" ")[0];
    let bet = +gameString.split(" ")[1];
    hands.push({ hand, bet, prio: getHand(hand) });
  });
  hands = hands.sort((a, b) => sortByHand(a, b));
  console.log(hands);
  hands.forEach((hand, i) => {
    points += hand.bet * (i + 1);
  });
  return points;
}

function sortByHand(a: Hand, b: Hand): number {
  if (a.prio > b.prio) {
    return 1;
  }
  if (a.prio < b.prio) {
    return -1;
  }
  for (let i = 0; i <= 5; i += 1) {
    if (cards[a.hand[i]] < cards[b.hand[i]]) {
      return -1;
    }
    if (cards[a.hand[i]] > cards[b.hand[i]]) {
      return 1;
    }
  }
  return 0;
}

function getHand(input: string): number {
  let ofaKind = 0;
  let charOfAKind = "not me";
  for (let i = 0; i < 5; i++) {
    let charToTest = input[i];
    let tempRes = input.split(charToTest).length - 1;
    if (tempRes > ofaKind) {
      ofaKind = tempRes;
      charOfAKind = input[i];
    }
  }
  // 5 of a kind
  if (ofaKind == 5) {
    return hands["5oK"];
  }
  // 4 of a kind
  if (ofaKind == 4) {
    return hands["4oK"];
  }
  // Check for Full House and 3 of a kind
  if (ofaKind == 3) {
    let remaining2chars = input.replace(new RegExp(charOfAKind, "gm"), "");
    return remaining2chars[0] == remaining2chars[1] ? hands.FH : hands["3oK"];
  }
  // Check for pairs
  if (ofaKind == 2) {
    let remaining3chars = input.replace(new RegExp(charOfAKind, "gm"), "");
    if (
      remaining3chars[0] == remaining3chars[1] ||
      remaining3chars[0] == remaining3chars[2] ||
      remaining3chars[1] == remaining3chars[2]
    ) {
      return hands["2P"];
    } else {
      return hands["1P"];
    }
  }
  return hands.HC;
}

//console.log(solve(testData));
console.log(solve(realData));
