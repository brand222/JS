'use strict';

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose,
and an array with the number of replies for each option. This data is stored
in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method
does 2 things:
1.1. Display a prompt window for the user to input the number of the selected option.
The prompt should look like this:
                What is your favorite programming language?
                0: JavaScript
                1: Python
                2: Rust
                3: C++
                (Write option number)

 1.2. Based on the input number, update the answers array. For example, if the option is 3, 
 increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a
 number and if the number makes sense (e.g. answer 5 wouldn't make sense, right?)
 2. Call this method whenever the user clicks on the "Answer Poll" button.
 3. Create a method called 'displayResults' which displays the poll results.
 The method takes a string as an input called 'type', which can be either 'string'
  or 'array'. If the type is 'array', simply display the results array as it is, using
  console.log(). This should be the default option. If type is 'string', display a string like
  "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tolls you learned about in this and the last section

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both
the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should
the this keyword look like in this situation?

BONUS TEST DATA: [5, 2 ,3]
BONUS TEST DATA: [1, 5, 3, 9, 6, 1]

GOOD LUCK :) 
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0 ,0]. More in the next section :)
  answers: new Array(4).fill(0),
  //here we create the object method called 'registerAnswer'
  //#1
  registerAnswer() {
    //get the answer
    const answer = Number(
      prompt(
        //here inside the prompt, we display the question
        //then we take the options array from this object,
        //join each option together seperated by a new space (/n)
        //and Add the final string at the end (according to instructions)
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    //----register the answer----
    //here we use short-circuiting to determine whether
    //the input is a number and that it is within the range of options
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
    //console.log(this.answers);
  },
  // #3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//#2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

//#4
//here we use the 'call' method so we pass in the array and specify it to be a string
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
//[5, 2 ,3]
//[1, 5, 3, 9, 6, 1]
