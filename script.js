const output = document.getElementById("output");
const clear = document.getElementById("AC");
const negativeToggle = document.getElementById("plusminusdiv");
const numbers = {
    zero: document.getElementById("zero"),
    one: document.getElementById("1"),
    two: document.getElementById("2"),
    three: document.getElementById("3"),
    four: document.getElementById("4"),
    five: document.getElementById("5"),
    six: document.getElementById("6"),
    seven: document.getElementById("7"),
    eight: document.getElementById("8"),
    nine: document.getElementById("9")
};
const operators = {
    plus: document.getElementById("+"),
    minus: document.getElementById("-"),
    multiply: document.getElementById("x"),
    divide: document.getElementById("divide"),
    equals: document.getElementById("="),
    point: document.getElementById(".")
};

let currentNumber = '';    
let storedNumber = null;   
let lastOperator = null;   
let displayValue = '';     

const handleNumberPress = (number) => {
  currentNumber += number;
  displayValue = currentNumber;
  output.innerText = displayValue;
  scaleOutput(); 
  console.log(`Current number: ${currentNumber}`);
};

const calculate = (a, operator, b) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return b;
    }
};

const handleOperatorPress = (operator) => {
    if (storedNumber !== null && lastOperator !== null && currentNumber !== '') {
        storedNumber = calculate(storedNumber, lastOperator, currentNumber);
        output.innerText = storedNumber;
    } 
 
    else if (currentNumber !== '') {
        storedNumber = currentNumber;
    }

    lastOperator = operator === 'x' ? '*' : operator;
    currentNumber = '';
    
    console.log(`Stored: ${storedNumber}, Operator: ${lastOperator}`);
};

const handleEquals = () => {
  if (storedNumber === null || lastOperator === null || currentNumber === '') {
      return;
  }

  const result = calculate(storedNumber, lastOperator, currentNumber);
  output.innerText = typeof result === 'number' ? result.toFixed(2) : result;
  scaleOutput(); 
  
  storedNumber = result;
  currentNumber = '';
  lastOperator = null;
  
  console.log(`Result: ${result}`);
};

const clearCalculator = () => {
  currentNumber = '';
  storedNumber = null;
  lastOperator = null;
  output.innerText = '0';
  output.style.fontSize = '100px'; 
  console.log('Calculator cleared');
};

const handleNegativeToggle = () => {
  if (currentNumber !== '') {
      currentNumber = currentNumber.startsWith('-') ? 
          currentNumber.slice(1) : 
          '-' + currentNumber;
      output.innerText = currentNumber;
      scaleOutput(); 
  } else if (storedNumber !== null) {
      storedNumber = -storedNumber;
      output.innerText = storedNumber;
      scaleOutput(); 
  }
  
  console.log(`Number toggled: ${currentNumber || storedNumber}`);
};

const scaleOutput = () => {
  const outputText = output.innerText;
  const baseSize = 100; 
  
  if (outputText.length > 8) {
      const newSize = baseSize * (8 / outputText.length);
      output.style.fontSize = `${newSize}px`;
  } else {
      output.style.fontSize = `${baseSize}px`;
  }
};

numbers.zero.addEventListener('click', () => handleNumberPress('0'));
numbers.one.addEventListener('click', () => handleNumberPress('1'));
numbers.two.addEventListener('click', () => handleNumberPress('2'));
numbers.three.addEventListener('click', () => handleNumberPress('3'));
numbers.four.addEventListener('click', () => handleNumberPress('4'));
numbers.five.addEventListener('click', () => handleNumberPress('5'));
numbers.six.addEventListener('click', () => handleNumberPress('6'));
numbers.seven.addEventListener('click', () => handleNumberPress('7'));
numbers.eight.addEventListener('click', () => handleNumberPress('8'));
numbers.nine.addEventListener('click', () => handleNumberPress('9'));

operators.plus.addEventListener('click', () => handleOperatorPress('+'));
operators.minus.addEventListener('click', () => handleOperatorPress('-'));
operators.multiply.addEventListener('click', () => handleOperatorPress('x'));
operators.divide.addEventListener('click', () => handleOperatorPress('/'));
operators.equals.addEventListener('click', handleEquals);

clear.addEventListener('click', clearCalculator);

negativeToggle.addEventListener('click', handleNegativeToggle);




