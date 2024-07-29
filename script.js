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


let digits = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['*', '/', '+', '-'];

document.addEventListener('keydown', () => {
    if (digits.includes(event.key)) {
        if (answer !== '') {
            firstNumber = '';
            operator = '';
            secondNumber = '';
            answer = '';
        };

        if (operator === '') {
            if (firstNumber.length < 10) {
                if (event.key === '.') {
                    let firstNumberCharacters = firstNumber.slice().split('');
                    if (firstNumberCharacters.includes('.') === false) {
                        firstNumber += event.key;
                    };
                } else {
                firstNumber += event.key;
                };
            };
        } else {
            if (secondNumber.length < 10) {
                if (event.key === '.') {
                    let secondNumberCharacters = secondNumber.slice().split('');
                    if (secondNumberCharacters.includes('.') === false) {
                        secondNumber += event.key;
                    };
                } else {
                secondNumber += event.key;
                };       
            };
        };
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
    if (operators.includes(event.key)) {
        if (answer !== '') {
            firstNumber = answer.toString();
            operator = '';
            secondNumber = '';
            answer = '';
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        } else if (answer === '' && firstNumber !== '' && operator !== '' && secondNumber !== '') {
            if (secondNumber === '0' && operator === '/') {
                firstNumber = '';
                operator = '';
                secondNumber = '';
                answer = '';
                display.textContent = `ERROR`;
            } else {
                answer = (+(operate(firstNumber, operator, secondNumber)).toFixed(3)).toString();
                console.log(typeof answer);
                console.log(answer);
                if (answer.length <= 10) {
                    operationLog();
                    firstNumber = answer;
                    answer = '';
                    secondNumber = '';
                } else {
                    firstNumber = '';
                    operator = '';
                    secondNumber = '';
                    answer = '';
                    display.textContent = `TOO LARGE`;
                }
            };
        }

        if (firstNumber !== '') {
            operator = event.key;
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
    if (event.key === 'Enter') {
        if (answer === '' && secondNumber !== '' && operator !== '' && firstNumber !== '') {
            if (secondNumber === '0' && operator === '/') {
                firstNumber = '';
                operator = '';
                secondNumber = '';
                answer = '';
                display.textContent = `ERROR`;
            } else {
                answer = (+(operate(firstNumber, operator, secondNumber)).toFixed(3)).toString();
                if (answer.length <= 10) {
                    operationLog();
                    answer = +(answer);
                    display.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`;
                } else {
                    firstNumber = '';
                    operator = '';
                    secondNumber = '';
                    answer = '';
                    display.textContent = `TOO LARGE`; }
            };
        };
    }
    if (event.key === 'Escape') {
        firstNumber = '';
        operator = '';
        secondNumber = '';
        answer = '';
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
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
    }
});



let operationLogContainer = document.querySelector('.operation-log');

function operationLog() {
    let newOperation = document.createElement("p");
    newOperation.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`;
    operationLogContainer.appendChild(newOperation);
};



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
            if (firstNumber.length < 10) {
                if (button.textContent === '.') {
                    let firstNumberCharacters = firstNumber.slice().split('');
                    if (firstNumberCharacters.includes('.') === false) {
                        firstNumber += button.textContent;
                    };
                } else {
                firstNumber += button.textContent;
                };
            };
        } else {
            if (secondNumber.length < 10) {
                if (button.textContent === '.') {
                    let secondNumberCharacters = secondNumber.slice().split('');
                    if (secondNumberCharacters.includes('.') === false) {
                        secondNumber += button.textContent;
                    };
                } else {
                secondNumber += button.textContent;
                };      
            };  
        };
        display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    })
});


let operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach((button) => {
    button.addEventListener('click',  () => {
        if (answer !== '') {
            firstNumber = answer.toString();
            operator = '';
            secondNumber = '';
            answer = '';
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        } else if (answer === '' && firstNumber !== '' && operator !== '' && secondNumber !== '') {
            if (secondNumber === '0' && operator === '/') {
                firstNumber = '';
                operator = '';
                secondNumber = '';
                answer = '';
                display.textContent = `ERROR`;
            } else {
                answer = (+(operate(firstNumber, operator, secondNumber)).toFixed(3)).toString();
                console.log(typeof answer);
                console.log(answer);
                if (answer.length <= 10) {
                    operationLog();
                    firstNumber = answer;
                    answer = '';
                    secondNumber = '';
                } else {
                    firstNumber = '';
                    operator = '';
                    secondNumber = '';
                    answer = '';
                    display.textContent = `TOO LARGE`;
                }
            }
        }
        if (firstNumber !== '') {
            operator = button.textContent;
            display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    });
});


let equalsButton = document.querySelector('.equals-button')
equalsButton.addEventListener('click', () => {
    if (answer === '' && secondNumber !== '' && operator !== '' && firstNumber !== '') {
        if (secondNumber === '0' && operator === '/') {
            firstNumber = '';
            operator = '';
            secondNumber = '';
            answer = '';
            display.textContent = `ERROR`;
        } else {
            answer = (+(operate(firstNumber, operator, secondNumber)).toFixed(3)).toString();
            if (answer.length <= 10) {
                operationLog();
                answer = +(answer);
                display.textContent = `${firstNumber} ${operator} ${secondNumber} = ${answer}`;
            } else {
                firstNumber = '';
                operator = '';
                secondNumber = '';
                answer = '';
                display.textContent = `TOO LARGE`;
            }
        };
    };
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
        console.log('no answer');
        console.log(typeof firstNumber);
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


let operationLogClear = document.querySelector('.operation-log-clear')
operationLogClear.addEventListener('click', () => {
    let operationLog = document.querySelector('.operation-log')
    while (operationLog.firstChild) {
        operationLog.removeChild(operationLog.firstChild)
    };
})