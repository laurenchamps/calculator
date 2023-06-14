// Get elements
const numBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');
const keypad = document.querySelector('.keypad');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

// let num1;
// let num2;
// let operator;

// Complete mathematical operation
function operate(num1, operator, num2) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case'*':
            result = num1 * num2;
            return result;
        case '/':
            result = num1 / num2;
            return result;
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
let num2 = null;
let operator = null;
let tempValue = null;
let tempOperator = null;
let numberStarted = false;

function setMode(e) {
    
    if (e.target.classList.contains("num")) {
        if (!numberStarted) {
            clearDisplay();
        }
        // Toggle numberStarted to true
        isNumberStarted(true);
        // Display number entered
        tempValue = Number(displayValue(e.target.innerText));
    }
    
    if (e.target.classList.contains("operator")) {
        // Toggle numberStarted to false
        isNumberStarted(false);
        // Store operator
        operator = e.target.innerText;
        setOperator(operator);

        // Set first or second number value
        if (num1 === null) {
            let numTest = setFirstValue(tempValue);
            setTempValue(null);
            console.log(numTest);
            console.log({num1})
        } else {
            let secondNumTest = setSecondValue(tempValue);
            console.log({num2});
        }

        // let opResult = operate(num1, operator, num2);
        // console.log({opResult});

    }
}

function setFirstValue(newValue) {
    num1 = newValue;
    return num1;
}

function setSecondValue(newValue) {
    num2 = newValue;
    return num2;
}

function setTempValue(newValue) {
    tempValue = newValue;
    return tempValue;
}

function setOperator(newOperator) {
    operator = newOperator;
    return operator;
}

function setTempOperator(newOperator) {
    tempOperator = newOperator;
    return tempOperator;
}

function isNumberStarted(boolean) {
   numberStarted = boolean;
   return numberStarted;
}

function clearDisplay() {
    display.innerText = '';
}

function completeOperation(e) {
    if (operator != null) {
        setSecondValue(tempValue);
        let result = operate(num1, operator, num2);
        clearDisplay();
        displayValue(result);
        setFirstValue(result);
        console.log({result});
    }
}

function clearAll() {
    clearDisplay();
    setFirstValue(null);
    setSecondValue(null);
    setTempValue(null);
    setOperator(null);
    setTempOperator(null);
}

// Event listeners
keypad.addEventListener('click', setMode);
equalsBtn.addEventListener('click', completeOperation);
clearBtn.addEventListener('click', clearAll);

