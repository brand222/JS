const age = '30';

if (age === 30) console.log("You are VERY CLOSE to being a billionaire (strict)");

//=== is the 'strict' equality operator 
//(it DOES NOT perform type coercion)

//== is the 'loose' equality operator 
//(which DOES perform type coercion)
if (age === 30) {
    console.log("You are VERY CLOSE to being a billionaire (loose)");
}
else if (age === 20) {
    console.log("it's 20!")
}
else {
    console.log("neither!");
}


/*
Summary, good practice suggests you only use the Strict (===)
equals operator for clean code. Avoid == as much as you can.*/

const favorite = prompt(`Whats your favorite number?`);

console.log(typeof favorite, `and it's ` + favorite);