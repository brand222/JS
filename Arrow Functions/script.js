'use strict';

/*
Arrow functions are alot faster to write.
*/
const calcAge3 = birthyear => 2020 - birthyear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const retirement = 65 - calcAge3(birthyear);
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    }
    else {
        return -1;
    }

}
console.log(yearsUntilRetirement(1990, `brandon`));
console.log(yearsUntilRetirement(1995, `madeline`));
console.log(yearsUntilRetirement(1951, 'brad'));



//an example of functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
//here we reference the previous function
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(11, 12));