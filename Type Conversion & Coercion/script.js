const inputYear = '1990';

//here we are converting a string to a number
//note: the second param passed in here is the string
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 30);

//when attempting to convert something to a number that can't be
//you get 'NaN' as the output (Not A Number) - an invalid number
console.log(Number(`brandon`));

//this is of number data type
console.log(typeof NaN);

//here we convert a number to a string
console.log(String(254), 254);

//type Coercion
//output: I am 30 years old
console.log(`I am` + 30 + ` years old`);

//here is an example of string to number coercion
//output: 10
console.log(`23` - `10` - 3);

//this is type coercion into a string
/* The 23 and the 10 become a string and then 3 is concatenated
with that string. So in this case, this is string coercion

output: 23103*/
console.log(`23` + `10` + 3);

//here is an example to a boolean coercion
//output: true
console.log(`23` > `10`);

let n = `1` + 1; //= '11'
n = n - 1; // = 10
console.log(n);

/* So the KEY TAKEAWAY is that when you add a string and a number
you get a string.

If you subtract a number from a string, you get a number */