// Get elements
const numBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.operator');

let num1;
let num2;
let operator;

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

// Display numbers on screen
let displayValue = function(e) {
    const display = document.querySelector('#display');
    if (display.innerText.length >= 7) {
        return;
    }
    display.innerText += e.target.innerText;

    console.log(`Length: ${display.innerText.length}`);
    let test = storeNum(display.innerText);
    console.log(test);
};

// Store number
function storeNum(num) {
    let num1 = num;

    return Number(num1);
}

// console.log(num1);

// Testing
// console.log(displayValue());

// Event listeners
numBtns.forEach(btn => btn.addEventListener('click', displayValue));