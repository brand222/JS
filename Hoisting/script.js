// hosting with variables
console.log(`me is ${me}`);
//console.log(job);
//console.log(year);

var me = 'brandon';
let job = 'programmer';
const year = 1990;

//console.log(addDecl(1, 2));
//console.log(addExpr(2, 3));

//function declaration - you CAN call those before they are declared in the code
function addDecl(a, b) {
  return a + b;
}

//function expressions - this is a CONST var, so it is in the TDZ (temporal dead zone) therefore
// cannot be used until after it is declared
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example:
console.log(numProducts);
if (!numProducts) {
  deleteShoppingCart();
}

let numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}
