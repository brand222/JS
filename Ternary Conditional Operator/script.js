const age = 23;
// age >= 18 ? console.log("you can drink wine in europe!")
//     : console.log("you cannot drink");

const drink = age >= 18 ? 'wine!' : 'water';
console.log(drink);


//we can also use the ternary operator inside of a template literal
//due to the fact that this is an expression, not a statement

//statements cannot be used in templates (i.e. if then ... or for loops)
console.log(`I like to drink ${age >= 18 ? 'wine!' : 'water'}`);
