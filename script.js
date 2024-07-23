let firstNumber = '';
let operator = '';
let secondNumber = '';

let display = document.querySelector('.display');
display.textContent = `${firstNumber} ${operator} ${secondNumber}`

function add(num1, num2) {
    return +num1 + +num2;
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
    let ans;
    if (op === '+') {
        ans = add(num1, num2);
    } else if (op === '-') {
        ans = subtract(num1, num2);
    } else if (op === '*') {
        ans = multiply(num1, num2);
    } else if (op === '/') {
        ans = divide(num1, num2);
    };
    return ans;
}

let digitButtons = Array.from(document.querySelectorAll('.digit'));
digitButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === '') {
            firstNumber += +(button.textContent);
        } else {
            secondNumber += +(button.textContent);
        };
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    })
});

let operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach((button) => {
    button.addEventListener('click',  () => {
        if (firstNumber !== '') {
            operator = button.textContent;
        }
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    })
});

let equalsButton = document.querySelector('.equals-button')
equalsButton.addEventListener('click', () => {
    answer = operate(firstNumber, operator, secondNumber)
    display.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`;
});