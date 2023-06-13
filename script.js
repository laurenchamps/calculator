// Get elements
const numBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const keypad = document.querySelector('.keypad');

// let num1;
// let num2;
// let operator;

// Complete mathematical operation
function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case'*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

const display = document.querySelector('#display');

// Display numbers on screen
function displayValue(digit) {
    
    if (display.innerText.length >= 7) {
        return Number(display.innerText);
    }
    display.innerText += digit;
    let value = Number(display.innerText);
    return value;
};

// // Perform operation
// function performOperation(e) {
//     let operator = e.target.innerText;
//     console.log(operator);

//     let result = getNumber();
//     console.log(`Result: ${result}`);
// }


let num1 = null;
let num2 = 0;
let operator = null;
let tempValue = 0;
let numberStarted = false;

function setMode(e) {
    
    if (e.target.classList.contains("num")) {
        if (!numberStarted) {
            clearDisplay();
        }
        // Toggle numberStarted to true
        isNumberStarted(true);
        // Display number entered
        tempValue = displayValue(e.target.innerText);
    }
    
    if (e.target.classList.contains("operator")) {
        // Toggle numberStarted to false
        isNumberStarted(false);
        // Store operator
        operator = e.target.innerText;
        setOperator(operator);

        if (num1 === null) {
            let numTest = setFirstValue(tempValue);
            clearTempValue();
            console.log(numTest);
            console.log({num1})
        } else {
            let secondNumTest = setSecondValue(tempValue);
            console.log(secondNumTest);
        }

    }
}

function setFirstValue(newValue) {
    num1 = Number(newValue);
    return num1;
}

function setSecondValue(newValue) {
    num2 = Number(newValue);
    return num2;
}

function setOperator(newOperator) {
    operator = (newOperator);
    return operator;
}

function clearTempValue() {
    tempValue = null;
}

function isNumberStarted(boolean) {
   numberStarted = boolean;
   return numberStarted;
}

function clearDisplay() {
    display.innerText = '';
}


// Event listeners
keypad.addEventListener('click', setMode);
