/* Coding challenge #4:

Steven wants to build a very simple tip calculator for whenever
her goes eating in a resturaunt. In his country, it's usual to tip 15% if the buill value is 
between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value.
Create a variable called 'tip' for this. It's not allowed to use an if/else statement.
(if it's easier for you, you can start with if/else, then try to convert to ternary).

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: Bill was 275, tip was 41.25, and the total value is 316.25.

TEST DATA: Test for bill values, 275, 40, and 430.

*/

let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

//bill1 
let tip1 = bill1 >= 50 && bill1 <= 300 ? .15 * bill1 : .20 * bill1;
let tip2 = bill2 >= 50 && bill2 <= 300 ? .15 * bill2 : .20 * bill2;
let tip3 = bill3 >= 50 && bill3 <= 300 ? .15 * bill3 : .20 * bill3;

total1 = bill1 + tip1;
total2 = bill2 + tip2;
total3 = bill3 + tip3;

console.log(`Bill 1 is ${bill1} and the tip was ${tip1} so the total is: ${total1}`);
console.log(`Bill 1 is ${bill2} and the tip was ${tip2} so the total is: ${total2}`);
console.log(`Bill 1 is ${bill3} and the tip was ${tip3} so the total is: ${total3}`);