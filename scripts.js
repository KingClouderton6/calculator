// TODO: Allow for users to do multiple operations 5 * 5 * 3 * 4 and get a result after each operation
// Opt TODO: Make 
const calculator = document.querySelector(".calculator-container");
const display = document.querySelector(".num-display");
let a = 0;
let b = 0;
let result = null;
let checkCrash = isFinite(result);
let operator = null;
let operatorCount = 0;
let secondaryOperator = null;
let storedOperator = null;

//Opt. TODO get rid of  these by looping through buttons and using button.id
const add = () => {
    operator = '+';
    storeVariable();
}

const subtract = () => {
    operator = '-';
    storeVariable();
}

const multiply = () => {
    operator = '*';
    storeVariable(); 
}

const divide = () => {
    operator = '/';
    storeVariable();
}

// Executes calculations (insert vomit emoji here)

function calculate(operator, a, b){

    console.log("Zzttt...zzttt...zzttt...machine...running...");

    if(operator === "+"){
        result = a + b;
        roundDown();
        display.textContent = result;
        return result;

    } else if (operator === "-"){
        result = a - b;
        roundDown();
        display.textContent = result;
        return result;

    } else if (operator === "*"){
        result = a * b;
        roundDown();
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
        
        if(display.textContent !== null){
            clearScreen();
        } 

        if (button.classList.contains("operator-button") && display.textContent){
            return;
        } else if (display.textContent == result && (button.classList.contains("operator-button") == false)){
            allClear();
            console.log("wiping");
        }
            
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

// Refreshes calculator and clears calc screen
const allClearBtn = document.getElementById('clear')
allClearBtn.addEventListener('click', () => {
    allClear();
});

function allClear(){
    a = 0;
    b = 0;
    result = null;
    equalsCheck = null;
    secondaryOperator = null;
    operatorCount = 0;
    display.textContent = '';
    checkCrash = result;
    operator = null;
    console.log("AC");
}


// Clears calc display but keep data
function clearScreen(){
// or if (operatorCount === 1)
    if (display.textContent == a && a !== b){
        display.textContent = '';
        console.log('CS');
    }
}

// Stores numbers for calculations : TODO: Only problem is the operator gets stuck
// Maybe if operator count is 1 clear screen when typing to fix calculating a number
function storeVariable(){
    ++operatorCount;
    if (operatorCount === 1){
        secondaryOperator = operator;
    } else if (operatorCount === 2){
        storedOperator = operator;
        operator = secondaryOperator;
        storeVariableB();
        calculate(operator, a, b);
    } else if (operatorCount === 3){
        operatorCount = 1;
        storeVariableB();
        secondaryOperator = operator;
        operator = storedOperator;
        calculate(operator, a, b);
    }

    a = Number(display.textContent);
    return a;
    
}

function storeVariableB(){
    
    // if (operatorCount === 1){
        b = Number(display.textContent);
        return b;
    // }
}

// Equals button functionalities
const operateBtn = document.getElementById('=');
operateBtn.addEventListener('click', () => {

    storeVariableB();
    calculate(operator, a, b);

    operatorCount = 0;
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
    result = Math.round(result * 1000)/ 1000;
     return result; 
}
