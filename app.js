// 76............
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(100, 300));
// 77............
function greetUser(name) {
    if (name === void 0) { name = "Alisha"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Tania");
greetUser();
// 78...............
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(10));
console.log(squareExpression(10));
