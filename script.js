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
    display.innerText += e.target.innerText;
};

// Event listeners
numBtns.forEach(btn => btn.addEventListener('click', displayValue));