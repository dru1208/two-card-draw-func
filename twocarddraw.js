/* you're going to create a game similar to 5 card draw, except a simpler version that only involves 2 cards and 2 players


rules for 5 card draw: https://www.pokerlistings.com/poker-rules-5-card-draw
!!!!! don't spend too long reading on these rules, we're not going to use them, we're going to run a variation of them !!!!!!


i want you to write a function that analyzes for which player would win in a game.

!!!!!!!!
IGNORE THE FACT THAT PLAYERS CAN SWAP OUT CARDS, I'LL BE DOING THAT IN THE BACK-END
!!!!!!!!

rules for 2 card draw:
1. any hand with pairs is greater than a hand with two different single cards
2. if both hands are pairs, the large value pair wins
3. if both hands only have 2 different single cards, the hand with the largest single card value wins

card values: 2 is smallest, K is second largest, A is largest


i've provided hardcoded arrays that you can use as your test case for your function. assume that the data you will process
will be in the form of an array that follows the hardcoded one that i provided.

your function will return the username of the player that wins the round */

//andrew should win
const testArray1 = [
  player_1: {
    username: "andrew",
    hand: ["A", "A"],
    is_host: true
  },
  player_2: {
    username: "vincent"
    hand: ["K", "K"]
    is_host: false
  }
]

// faisal should win
const testArray2 = [
  player_1: {
    username: "faisal",
    hand: ["2", "2"],
    is_host: true
  },
  player_2: {
    username: "vincent"
    hand: ["A", "9"]
    is_host: false
  }
]

// faisal should win
const testArray3 = [
  player_1: {
    username: "andrew",
    hand: ["K", "9"],
    is_host: true
  },
  player_2: {
    username: "faisal"
    hand: ["5", "A"]
    is_host: false
  }
]

//to make life easier for you, here is an array with objects for each card and a matching "value" to compare for largest
const cardValues = [{'2': 1},{'3': 2}, {'4': 3}, {'5': 4}, {'6': 5}, {'7': 6}, {'8': 7}, {'9': 8}, {'10': 9},
{'J': 10}, {'Q': 11}, {'K': 12}, {'A': 13}]


// the function that you're going to write
function findWinner (arr) {
  // your code here

  // return the usename of the winning player
}


// test cases
console.log(findWinner(testArray1)); // should log "andrew"
console.log(findWinner(testArray2)); // should log "faisal"
console.log(findWinner(testArray3)); // should log "faisal"



