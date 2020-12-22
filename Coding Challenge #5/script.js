/* Coding challenge #5:

Back to the two gymnastics teams, the Dolphins and the Koalas! 
There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the the 3 
scores is calculated (so one average score per team).
A team ONLY wins if it has DOUBLE the average score of the 
other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to 
the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA: dolphins score 44, 23, and 71.
koalas score 65, 54, and 49.

*/

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

//scenario where both tie
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//scenario where the koalas win
const avgDolphins2 = calcAverage(44, 23, 71);
const avgKoalas2 = calcAverage(88, 46, 142);

//scenario where dolphins win
const avgDolphins3 = calcAverage(88, 46, 142);
const avgKoalas3 = calcAverage(44, 23, 71);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`The dolphins WIN with a score of ${avgDolphins} vs 
        the koalas score of ${avgKoalas}.`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`The koalas WIN with a score of ${avgKoalas} vs 
        the dolphins score of ${avgDolphins}.`);
  } else {
    console.log(
      `no one wins due to dophins scoring ${avgDolphins} 
    vs koalas scoring ${avgKoalas}.`
    );
  }
};

//output your winners
checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);
checkWinner(avgDolphins3, avgKoalas3);
