let firstNumber = '';
let operator = '';
let secondNumber = '';
let answer = '';

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
        if (answer !== '') {
            firstNumber = '';
            operator = '';
            secondNumber = '';
            answer = '';
        };

        if (operator === '') {
            if (button.textContent === '.') {
                let firstNumberCharacters = firstNumber.slice().split('');
                if (firstNumberCharacters.includes('.') === false) {
                    firstNumber += button.textContent;
                };
            } else {
            firstNumber += button.textContent;
            };
        } else {
            if (button.textContent === '.') {
                let secondNumberCharacters = secondNumber.slice().split('');
                if (secondNumberCharacters.includes('.') === false) {
                    secondNumber += button.textContent;
                };
            } else {
            secondNumber += button.textContent;
            };        
        };
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    })
});


let operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach((button) => {
    button.addEventListener('click',  () => {
        if (answer !== '') {
            firstNumber = answer;
            operator = '';
            secondNumber = '';
            answer = '';
        } else if (answer === '' && firstNumber !== '' && operator !== '' && secondNumber !== '') {
            firstNumber = operate(firstNumber, operator, secondNumber);
            secondNumber = '';
        }

        if (firstNumber !== '') {
            operator = button.textContent;
        }

        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    })
});


let equalsButton = document.querySelector('.equals-button')
equalsButton.addEventListener('click', () => {
    answer = +(operate(firstNumber, operator, secondNumber)).toFixed(3)

    display.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`;
});


let clearButton = document.querySelector('.clear-button')
clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    answer = '';
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
});


let deleteButton = document.querySelector('.backspace-button')
deleteButton.addEventListener('click', () => {
    if (answer === '') {
        if (secondNumber !== '') {
            secondNumber = secondNumber.slice(0, -1);
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        } else if (operator !== '') {
            operator = ''
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        } else if (firstNumber !== '') {
            firstNumber = firstNumber.slice(0, -1);
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
});