'use strict';

//Coding challenge #11

/*
Lets continue with our football betting app

1. Loop over the game.scored array and print each player name to
the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console ( We already
  studied how to calculate averages, you can go check if you dont remember).
3. Print the 3 odds to the console, but in a nice formatted way (exactly like this):
          Odd of victory Bayern Munich: 1.33
          Odd of draw: 3.25
          Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for 'draw'). HINT: Note how the odds and the game objects have the same property
names :) 

BONUS: Create an object called 'scorers' which contains the names of the players who scored 
as properties, and the number of goals as the value. In this game, it will look like this:

{
  Gnarby: 1,
  Hummels: 1, 
  Lewandowski: 2
}

Good luck :) 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nove 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to
// the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [goalNumber, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${scorer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console ( We already
//   studied how to calculate averages, you can go check if you dont remember).

let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(`Average of odds equals ${average}`);

// 3. Print the 3 odds to the console, but in a nice formatted way (exactly like this):
//           Odd of victory Bayern Munich: 1.33
//           Odd of draw: 3.25
//           Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for 'draw'). HINT: Note how the odds and the game objects have the same property
// names :)

//this is the way i did it (manually)
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// console.log(`logging ${game[team]}`);

//first, we do Object.entries to get the key/value pairs of the game.odds object
//then we deconstruct the array in our loops by the team name (key) and the odd (value)
//then we say teamString equals whatever 'team' (teamName) equals
//if it's 'x', then set the text equal to draw
//otherwise, print 'victory' and whichever teamName you happen to be on in the loop!
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}
