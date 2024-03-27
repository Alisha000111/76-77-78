// 76............
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers(100, 300)); 
// 77............
function greetUser(name: string = "Alisha") {
    console.log(`Hello, ${name}!`);
}
greetUser("Tania");
greetUser();
// 78...............
function squareDeclaration(number: number): number {
    return number * number;
}
const squareExpression = function(number: number): number {
    return number * number;
};
console.log(squareDeclaration(10)); 
console.log(squareExpression(10)); 


