const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = null;
let b = null;
let temp = 0;

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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
// Maybe do if / else for when their is a 0 still present in the calculator
        
        if (button.classList.contains("num-button")){
            display.textContent  += (button.id);
        }
    });
});

const allClearBtn = document.getElementById('clear')

allClearBtn.addEventListener('click', () => {
    allClear();
});

function allClear(){
    a = 0;
    b = 0;
    temp = 0;
    display.textContent = '';
}

function clearScreen(){
    display.textContent = '';
}

function storeVariable(){
    a = display.textContent;
    return a;
}





