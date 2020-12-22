'use stricts'
/* Coding challenge #8 (loops):

Let's improve steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to 
calculate tips and total values (bill + tip) for every bill value in the bills 
array. Use a for loop to perform the 10 calculations

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52

HINT: Call the calcTip in the loop and use the push method to add values to
the tips and totals arrays :) 

4. BONUS: Write a function called 'calcAverage' which takes an array called 'arr'
as an argument. This funciton calculates the average of all numbers in the given
array. This is a DIFFICULT challenge (we haven't done this before!). 
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .2
}

for (let i = 0; i < bills.length; i++) {
    console.log(calcTip(bills[i]) + bills[i]);
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log("-------LOGGING THE NEWLY-POPULATED TIPS ARRAY");
tips.forEach(number => console.log(number));

console.log("-------LOGGING THE NEWLY-POPULATED TOTALS ARRAY");
totals.forEach(number => console.log(number));

const calcAverage = function (arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num / arr.length;
}

console.log(`Average equals: ${calcAverage(totals)}`);