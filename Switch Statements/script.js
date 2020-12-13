const day = 'wednesday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log("Today is the first day of the week");
        console.log("Start working really really hard");
        break;
    case 'tuesday':
        console.log("Today is the second day of the week");
        console.log("You should feel good about your work on monday");
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Today is wednesday or thursday`);
        break;
    case `Friday`:
        console.log("Hell yes! It's the end of the work week!");
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`Enjoy the weekend :-) `);
        break;
    default:
        console.log(`Not a valid day!`);
}