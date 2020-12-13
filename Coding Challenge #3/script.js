/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas.
They compete against eachother 3 times. The winner with the highest
average score wins a trophy!

1. Calculate the average score for each team, using the test
data below
2. Compare the team's average scores to determine the winner of
the competition, and print it to the console. Don't forget
that there can be a draw, so test for that as well (draw means
    they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With
this rule, a team only wins if it has a higher score than the
other team, and the same time a score of at least 100 points.
HINT: Use a logical operator to test for minimum score, as well as
multiple else-if blocks :)

4. BONUS 2: Minumum score also applies to a draw! So a draw
only happens when both teams have the same score and both have a
score greater than or equal to 100 points. Otherwise, no team wins
the trophy.

TEST DATA: Dolphins score 96, 108, and 89. Koalas score
88, 91, 110.

TEST DATA BONUS 1: Dolphins score, 97, 112, and 101. Koalas score
109, 95, 123.

TEST DATA BONUS 2: Dolphins score 97, 112, 101. Koalas score
109, 95, 106

*/

const dolphinsAvgScore1 = (41 + 100 + 100) / 3;
const koalasAvgScore1 = (40 + 101 + 100) / 3;

if (dolphinsAvgScore1 > koalasAvgScore1 && dolphinsAvgScore1 >= 100) {
    console.log(`dolphins win because their score (${dolphinsAvgScore1}) is greater than koala's score of ${koalasAvgScore1}`);
}
else if (koalasAvgScore1 > dolphinsAvgScore1 && koalasAvgScore1 >= 100) {
    console.log(`koalas win because their score (${koalasAvgScore1}) is greater than dolphin's score of (${dolphinsAvgScore1})`);
}
else if (dolphinsAvgScore1 === koalasAvgScore1 && dolphinsAvgScore1 >= 100 && koalasAvgScore1 >= 100) {
    console.log(`both teams win the trophy! Both at or over 100 and the same number dolphins: ${dolphinsAvgScore1} and koalas: ${koalasAvgScore1}`);
}
else {
    console.log("both teams lose!");

}
