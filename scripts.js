const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(operator, a, b){
    if (operator === "+"){
        add(a, b);
    }
    if (operator === "-"){
        subtract(a, b);
    }
    if (operator === "*"){
        multiply(a, b);
    }
    if (operator === "/"){
        divide(a, b);
    }
};