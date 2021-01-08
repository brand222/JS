'use strict';

//Coding challenge #12

/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair.
So remove this event from the game events log. 
3. Print the following string to the console: "An event happened, on average, every 9 minutes
" (keeps in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or
the second half (after 45 minutes) of the game, like this;
                (FIRST HALF) 17: GOAL
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

const gameEvents = new Map([
  [17, ' GOAL!'],
  [36, ' SUBSTITUTION'],
  [47, ' GOAL!'],
  [61, ' SUBSTITUTION'],
  [64, ' Yellow Card!'],
  [69, ' Red Card!'],
  [70, ' SUBSTITUTION'],
  [72, ' SUBSTITUTION'],
  [76, ' GOAL!'],
  [80, ' GOAL!'],
  [92, ' Yellow Card!'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

//here we converted this to a set and then put braces around it to make it an array
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(...gameEvents);

// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair.
// So remove this event from the game events log.
gameEvents.delete(64);
console.log(...gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes
// " (keeps in mind that a game has 90 minutes)\

console.log(
  `An event happened, on average, every ${gameEvents.size / 90} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(`${time}`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or
// the second half (after 45 minutes) of the game, like this;
//                 (FIRST HALF) 17: GOAL

for (const [key, value] of gameEvents) {
  console.log(`${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'} ${key}: ${value}`);
}
