const firstName = 'Brandon';
const job = 'programmer';
const birthYear = 1990;
const year = 2020;
const age = year - birthYear;

const greeting = "I'm " + firstName + " and how's it going!? I'm " + age + " years old";

console.log(greeting);

const templateLiteral = `hey there! I'm ${firstName} and i am ${age} years old.`

console.log(templateLiteral);
