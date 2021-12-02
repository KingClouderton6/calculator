// TODO: Allow for users to do multiple operations 5 * 5 * 3 * 4 and get a result after each operation
// TODO: Always have a number in the screen when calculations are on going;
const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = null;
let b = null;
let result = null;
let checkCrash = isFinite(result);
let operator = null;

// Opt. TODO get rid of  these by looping through buttons and using button.id
const add = () => {
    storeVariable();
    operator = '+';
}

const subtract = () => {
    storeVariable();
    operator = '-';
}

const multiply = () => {
    storeVariable();
    operator = '*';
}

const divide = () => {
    storeVariable();
    operator = '/';
}

// Functions that execute calculations (insert vomit here)
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
        roundDown();
        if (checkCrash === false){
            display.textContent = 'Really?';
        } else 
        display.textContent = result;
        return result;
    }
}
// Adds numbers to calculator display 
const buttons = document.querySelectorAll('.num-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        stopConcat();

        if (button.classList.contains("num-button")){
            display.textContent  += button.id;
        }
        // Stops users typing in multiple decimal points
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
    a = null;
    b = null;
    result = null;
    display.textContent = '';
    checkCrash = result;
    operator = null;
}

function storeVariable(){
    a = display.textContent;
    clearScreen();
    return a;
}

function storeVariableB(){
    if (result === null) {
        b = Number(display.textContent);
    } else {
        a = result;
    }
}

function clearScreen(){
    if ( a !== null){
        display.textContent = '';
    }
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
// Can probably get rid of these if you follow up on line eleve
function addFunctionality(){
    document.getElementById('.').disabled = false;
}

// Deletes numbers 
const delBtn = document.getElementById('delete');
function delNum(){
   let str = display.textContent;
   let numAsArray = str.split('')
   numAsArray.pop();
   let delStr = numAsArray.join('');
   display.textContent = delStr;
}

function stopConcat(){
    if (result == Number(display.textContent)){
        allClear();
    }
}

function roundDown(){
    result = Math.round(result * 100)/ 100;
    return result;
}