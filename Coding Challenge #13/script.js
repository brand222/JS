'use strict';

/*
Write a program that recieves a list of variables names written
in underscore_case and convert them to camelCase

The input will come from  a textArea inserted into the DOM (see code below),
and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
   first_name
Some_Variable
calculate_AGE
  delayed_departure

    SHOULD PRODUCE THIS OUTPUT (5 seperate console.log outputs)
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture


HINT 1: Remember which character defines a new line in the text area ;) 

HINT 2: The solution only needs to work for a variable made out of 2 words,
like a_b

HINT 3: Start without worrying about the (checkmark emoji). Tackle
that only after you have the variable name conversion working ;) 

HINT 4: This challenge is difficult on purpose, so start watching the 
solution in case you're stuck.
Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK! :) 


*/
let textField = document.createElement('textarea');
let pushButton = document.createElement('button');

pushButton.setAttribute('id', 'btnPush');
pushButton.textContent = 'PUSH ME';

document.body.append(textField);
document.body.append(pushButton);
//const text = document.querySelector('textarea').value;

/* Add an event listener on the "PUSH ME" button */
// document
//   .getElementById('btnPush')
//   .addEventListener('click', function (inputText) {
//     const camelCaseArray = [];
//     //1. Set the textarea input equal to inputText argument
//     inputText = textField.value;
//     //2. Take words and divide them into 5 different strings divided by new line
//     const words = inputText.toLowerCase().trim().split('\n');

//     console.log(words);
//     for (const word of words) {
//       if (word.includes('_')) {
//         let twoWords = word.toLowerCase().trim().split('_');

//         let firstWord =
//           twoWords[0].charAt(0).toLowerCase() +
//           twoWords[0].slice(1).toLowerCase();

//         let secondWord =
//           twoWords[1].charAt(0).toUpperCase() +
//           twoWords[1].slice(1).toLowerCase();

//         let finalWord = firstWord + secondWord;
//         camelCaseArray.push(finalWord);
//       } else {
//         camelCaseArray.push(word);
//       }
//     }
//     //these are the camel cased words after being processed by the string logic
//     console.log(` ${camelCaseArray}`);

//     for (let i = 0; i < camelCaseArray.length; i++) {
//       console.log(`${camelCaseArray[i]}`);
//     }
//   });

//quiz solution
document
  .getElementById('btnPush')
  .addEventListener('click', function (inputText) {
    const camelCaseArray = [];
    //1. Set the textarea input equal to inputText argument
    inputText = textField.value;

    const rows = inputText.split('\n');
    //console.log(rows);

    //here we want to not only loop through the values,
    //but also keep track of the index
    //therefore, we used the rows.entries() method
    //so we get indexes and values
    //Each value is it's own array [0, value1] etc...
    //so we destructured that array into the i(index) and row(value)
    //and went from there.
    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');
      const output = `${first.toLowerCase()}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
  });
