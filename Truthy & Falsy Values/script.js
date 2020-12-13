/*
Falsy values are values that aren't exactly false, but become false
when you convert that value into a boolean

There are only 5 values:

0,
'',
undefined,
null,
and NaN
*/


//output for all of these: false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(``));
console.log(Boolean(NaN));
console.log(Boolean(null));


//money in this case evaluates to false
//so the else block would get executed 
//due to the fact that the variable 'money' is a falsy value
const money = 0;
if (money) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}

//now if we run the same block of code
//but make money2 a non-zero value
//it becomes a truthy value (one that evaluates to true by default)
const money2 = 100;
if (money2) {
    console.log("Don't spend it all");
}
else {
    console.log("You should get a job!");
}


//this evaluates to FALSE due to the fact that it's 
//undefined (uninstantiated) - a falsy value
let height;
if (height) {
    console.log("Yay! Height is defined");
}
else {
    console.log("Height is undefined");
}


//here is a bug-catching case
let height = 0;
if (height) {
    console.log("Yay! Height is defined");
}
else {
    console.log("Height is UNDEFINED");
}