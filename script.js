console.log('Hello World!')

let firstNumber;
let operator;
let secondNumber;

console.log(firstNumber);

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, op, num2) {
    let answer;
    if (op === '+') {
        answer = add(num1, num2);
    } else if (op === '-') {
        answer = subtract(num1, num2);
    } else if (op === '*') {
        answer = multiply(num1, num2);
    } else if (op === '/') {
        answer = divide(num1, num2);
    };
    firstNumber = answer;
    return firstNumber;
}


firstNumber = '3';
operator = '*';
secondNumber = '6';

console.log(multiply(firstNumber, secondNumber));
console.log(operate(firstNumber, operator, secondNumber));
console.log(firstNumber);
