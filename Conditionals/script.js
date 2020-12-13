const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);

let age = 16;
if (age >= 20 || age < 30) {
    console.log("you are in your twenties!")
}
else if (age >= 30) {
    console.log("you are older than twenties")
}
else {
    console.log("you are younger than 20");
}