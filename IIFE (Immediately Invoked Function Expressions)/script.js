'use strict';

//sometimes we need a function which is executed once, and never needed again

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//if you wrap everything in parenthesis, you convert this to a function expression
// and then call it all in the same expression by adding opening and closed () at the end
//Immediately Invoked Function Expression

(function () {
  console.log('This will never run again(2)');
  //nothing has access to this variable (it has 'private' scope)
  //this data is 'encapsulated' inside of the function scope created here
  const isPrivate = 23;
})();

//here is another way to create an IIFE
(() => console.log('Hi There! Heres another one!!'))();
