
console.log("-------------LOOPING WITH PARAMS-----------");
for (let i = 0; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
    if (i % 2 == 0) {
        console.log(`even number! ${i}`);
    }
    else {
        console.log(`odd number! ${i}`);
    }
}

const brandonArray = [
    'Brandon',
    'McDonald',
    2020 - 1990,
    'entreprenuer',
    ['Micah', 'Max', 'Parker'],
    true
];

const types = [];

console.log("---------FILLING AN EMPTY ARRAY----------");
for (let i = 0; i <= brandonArray.length - 1; i++) {
    console.log(brandonArray[i], typeof brandonArray[i]);

    //filling an empty array
    //types[i] = typeof brandonArray[i];

    //here we push the type values into the 'types' array
    types.push(typeof brandonArray[i]);
}
//log the newly-populated values of this array
console.log(types);

console.log("---------ONLY STRINGS --------");
for (let i = 0; i < brandonArray.length; i++) {
    if (typeof brandonArray[i] !== 'string') {
        continue;
    }
    else {
        console.log(brandonArray[i], typeof brandonArray[i]);
    }
}


console.log("--------BREAK WITH NUMBER-------");
for (let i = 0; i < brandonArray.length; i++) {
    if (typeof brandonArray[i] === 'number') {
        break;
    }
    else {
        console.log(brandonArray[i], typeof brandonArray[i]);
    }
}

// const years = [1990, 2007, 1969, 2020];
// console.log(years.length);
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2020 - years[i]);
// }
// console.log(ages);

console.log("-------------LOOPING BACKWARDS AND REVERSING AN ARRAY -------------");
console.log("backwards array");
const backwardsArray = [];
let j = 0;
for (let i = brandonArray.length - 1; i >= 0; i--) {
    // console.log(brandonArray[i]);
    backwardsArray[j] = brandonArray[i];
    j++;
}

backwardsArray.forEach(number => console.log(number));

//loop inside of a loop
//here for each exercise, we have 5 reps
console.log("-------------LOOP INSIDE OF A LOOP-------------");
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}