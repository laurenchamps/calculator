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

// Testing
let result = operate(20, '-', 4);
console.log(result);