const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(operator, a, b){
    if (operator === "+"){
        return add(a, b);
    }
    if (operator === "-"){
        return subtract(a, b);
    }
    if (operator === "*"){
        return multiply(a, b);
    }
    if (operator === "/"){
        return divide(a, b);
    }
};