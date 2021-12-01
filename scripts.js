const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = null;
let b = null;
let result = 0;
let operator = null;

// Can get rid of all these by looping through buttons and using (button.id)
// 

const add = (a, b) => {
    storeVariable();
    operator = '+';
}

const subtract = (a, b) => {
    storeVariable();
    operator = '-';
}

const multiply = (a, b) => {
    storeVariable();
    operator = '*';
}

const divide = (a, b) => {
    storeVariable();
    operator = '/';
}

const operate = function(operator, a, b){
    b = Number(display.textContent);

    if (operator === "+"){
        result = a + b;
        display.textContent = result;
        return result;
    }
    if (operator === "-"){
        result = a - b;
        display.textContent = result;
        return result;
    }
    if (operator === "*"){
        result = a * b;
        display.textContent = result;
        return result;
    }
    if (operator === "/"){
        result = a / b;
        display.textContent = result;
        return result;
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

const addBtn = document.getElementById('+');
addBtn.addEventListener('click', () => {
    add();
})

const subtractBtn = document.getElementById('-');
subtractBtn.addEventListener('click', () => {
    subtract();
})

const multiplyBtn = document.getElementById('*');
multiplyBtn.addEventListener('click', () => {
    multiply();
})

const divideBtn = document.getElementById('/');
divideBtn.addEventListener('click', () => {
    divide();
})

// Functions for AllClear and to Store first variable typed in by user
const allClearBtn = document.getElementById('clear')

allClearBtn.addEventListener('click', () => {
    allClear();
});

function allClear(){
    a = 0;
    b = 0;
    temp = 0;
    operator = null;
    
}

function storeVariable(){
    a = Number(display.textContent);
    clearScreen();
    return a;
}

function clearScreen(){
    display.textContent = '';
}

// Equals button functionalities

const operateBtn = document.getElementById('=');

operateBtn.addEventListener('click', () => {
    operate(operator, a, b);
});


