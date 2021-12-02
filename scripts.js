// TODO: Fix concetanating of new numbers to the display after a result has been calculated if the user doesn't clear
// TODO: Finish functionality for DEL button (turn into array push out last numb, display)
const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = 0;
let b = 0;
let result = 0;
let checkCrash = isFinite(result);
let operator = null;

// Can get rid of all these by looping through buttons and using (button.id)
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

// Functions that do the calculations (insert vomit here)
// TODO make a equal B 
const operate = function(){
    storeVariableB();
    calculate(operator, a, b);  
};

function calculate(operator, a, b){
    if(operator === "+"){
        result = a + b;
        display.textContent = result;
        return result;

    } else if (operator === "-"){
        result = a - b;
        display.textContent = result;
        return result;

    } else if (operator === "*"){
        result = a * b;
        display.textContent = result;
        return result;

    } else if (operator === "/"){
        result = a / b;
        stopCrash();
        if (checkCrash === false){
            display.textContent = 'Really?';
        } else 
        display.textContent = result;
        return result;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);

// Maybe do if / else for when their is a 0 still present in the calculator
// Adds numbers to calculator display 
        if (button.classList.contains("num-button")){
            display.textContent  += button.id;
        }

        if((display.textContent).includes('.')){
            removeDotFunctionality();
        }   else {
            addFunctionality();
        }   
    });
});

// Can probably get rid of these if you follow up on line eleven
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
    result = 0;
    display.textContent = '';
    checkCrash = result;
    operator = null;
}
// Can probably get rid of these if you follow up on line eleven
function storeVariable(){
    a = display.textContent;
    clearScreen();
    return a;
}

function storeVariableB(){
    b = Number(display.textContent);
}

function clearScreen(){
    display.textContent = '';
}
// Equals button functionalities
const operateBtn = document.getElementById('=');

operateBtn.addEventListener('click', () => {
    operate(operator, a, b);
});

// + / - button functionality
const negOrPosBtn = document.getElementById('negative-positive');

negOrPosBtn.addEventListener('click', () => {
    makeNegativeOrPositive();
});

function makeNegativeOrPositive (){
    if (Number(display.textContent) > 0){
        let negConversion = display.textContent;
        let negativeSym = '-';
        let negativeNum = negativeSym.concat(negConversion);
        return display.textContent = negativeNum;
    } 

    if(Number(display.textContent) < 0){
        let posConversion = display.textContent;
        let posNumber = posConversion.replace('-','');
        display.textContent = posNumber;
        
    }
}

// Checks for infinity to stop calculator crashing
function stopCrash(){
    checkCrash = isFinite(result);
}

function removeDotFunctionality(){
    document.getElementById('.').disabled = true;
}

function addFunctionality(){
    document.getElementById('.').disabled = false;
}

