'use strict'

console.log("------FOR LOOP EXAMPLE----")
for (let rep = 1; rep <= 3; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

console.log("-------FIRST WHILE LOOP------");
let i = 1;
while (i <= 5) {
    console.log(`rep ${i}`)
    i++;
}


//run the while loop until you get a '4' roll.
/*
One of the benefits of a while loops is that you do not have to use
an iterator variable. Usually you can use this loop for when you do 
not know how many iterations are needed to accomplish what you need.
*/
console.log()
let dice = Math.trunc(Math.random() * 5) + 1;
console.log(dice);

while (dice !== 4) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 5) + 1;
}
console.log(`yay! you got ${dice}`);
