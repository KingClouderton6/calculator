// TODO: Allow for users to do multiple operations 5 * 5 * 3 * 4 and get a result after each operation
// TODO: Always have a number in the screen when calculations are on going;
const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = null;
let b = null;
let result = null;
let checkCrash = isFinite(result);
let operator = null;
let operatorCount = 0;

//Opt. TODO get rid of  these by looping through buttons and using button.id
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

// Executes calculations (insert vomit emoji here)
const operate = function(){
    storeVariableB();
    calculate(operator, a, b);  
};

function calculate(operator, a, b){

    console.log("Zzttt...zzttt...zzttt...machine...running...");

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
        }
        
        if (checkCrash === false){
            display.textContent = 'Really?';
        } else {
        display.textContent = result;
        return result;
    }
}

// Adds numbers to calculator display 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        // stopConcat();

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

// Effectively refreshes the calculator
const allClearBtn = document.getElementById('clear')
allClearBtn.addEventListener('click', () => {
    allClear();
});

function allClear(){
    a = null;
    b = null;
    result = null;
    operatorCount = 0;
    display.textContent = '';
    checkCrash = result;
    operator = null;
    console.log("All Clear");
}

function clearScreen(){
    console.log("clearScreen");
    if ( a !== null){
        display.textContent = '';
    }
}

// Stores numbers for calculations
function storeVariable(){

    if (b === null && a !== null){
        storeVariableB();
    }

    a = Number(display.textContent);
    console.log(a);
    clearScreen();
    return a;
}

function storeVariableB(){
    if (result === null || result === a) {
        b = Number(display.textContent);
        console.log(`storeVariableB`);
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

// Turns display nums into array and pops out last array object; 
const delBtn = document.getElementById('delete');
function delNum(){
   let str = display.textContent;
   let numAsArray = str.split('')
   numAsArray.pop();
   let delStr = numAsArray.join('');
   display.textContent = delStr;
}

function roundDown(){
    console.log("roundDown");
    result = Math.round(result * 1000)/ 1000;
     return result; 
}

function flowOperate(){
    ++operatorCount;
    console.log(operatorCount);
    if (operatorCount == 2){
        calculate();
    }
}