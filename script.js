// Get elements
const keypad = document.querySelector('.keypad');
const display = document.querySelector('#display');
const numBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const clearAllBtn = document.querySelector('[data-clear-all]');
const clearBtn = document.querySelector('[data-clear]');

let num1 = null;
let num2 = null;
let operator = null;
let tempValue = null;
let tempOperator = null;
let numberStarted = false;
let result;

// Complete mathematical operation
function operate(num1, operator, num2) {
    let result;
    switch(operator) {
        case '+':
            result = Number(num1 + num2);
            return result;
        case '-':
            result = Number(num1 - num2);
            return result;
        case'*':
            result = Number(num1 * num2);
            return result;
        case '/':
            if(num2 === 0) {
                result = 'calculator says no';
                return result;
            }
            result = Number(num1 / num2);
            return result;
    }
}

// Display numbers on screen
function displayValue(digit) {
    if (display.innerText.length >= 7) {
        return display.innerText;
    }
    return display.innerText += parseFloat((digit).toFixed(6));
};

// Store and display numbers and operators when entered by user
function operateButtons(e) {
    if (e.target.matches('[data-number]')) {
        if (numberStarted === false) {
            clearDisplay();
            // Toggle numberStarted to true
            isNumberStarted(true);
            // Display number entered
            display.innerText = e.target.innerText;
        } else if (display.innerText.length < 10) {
            display.innerText += e.target.innerText;
        }
        tempValue = Number(display.innerText);
    }

    if (e.target.matches('[data-clear]') && numberStarted) {
        display.innerText = display.innerText.slice(0, -1);
        tempvalue = Number(display.innerText);
    }
    
    if (e.target.matches('[data-operator]')) {
        // Toggle numberStarted to false
        isNumberStarted(false);

        // Set first or second number value
        if (num1 === null) {
            setFirstValue(tempValue);
            setOperator(e.target.id);
            setTempValue(null);
        } else {
            clearDisplay();
            setSecondValue(tempValue);
            setTempOperator(e.target.id);
            let result = operate(num1, operator, num2);
            displayValue(result);
            setFirstValue(result);
            setOperator(tempOperator);
            setSecondValue(null);
            setTempValue(null);
        }
    }
}

// Complete calculation when equals button clicked
function operateEquals(e) {
    if (operator != null) {
        setSecondValue(tempValue);
        if (num2 != null) {
            let result = operate(num1, operator, num2);
            clearDisplay();
            displayValue(result);
            setFirstValue(null);
            setOperator(null);
            setSecondValue(null);
            setTempValue(result);
            setTempOperator(null);
        }
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

// Change global variable values
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

// Event listeners
keypad.addEventListener('click', operateButtons);
equalsBtn.addEventListener('click', operateEquals);
clearAllBtn.addEventListener('click', clearAll);
