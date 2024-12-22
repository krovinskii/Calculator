//ID's from index, all buttons

const output = document.getElementById("output");
const clear = document.getElementById("AC");
const negativeToggle = document.getElementById("plusminusdiv");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("x");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const zero = document.getElementById("0");
const point = document.getElementById(".");
const equal = document.getElementById("=");


let firstInput = [];
let userInput1 = [];
let userInput2 = [];
let runningTotal = `${userInput1} `;
let mathOperator = "";
let result = "";

//event listeners will go below here .. need event listener on every button => add to output
//value and add to runningTotal 
//need isPreviousInput to check if theres a previous input, if so add the new input as 
// userInput 2. if there is no previous, then assign as userInput 1.

const clearAll = clear.addEventListener("click", () => {
    output.innerText = "";
    runningTotal = 0;
    userInput1 = 0;
    userInput2 = 0;
    mathOperator = "";
    console.log(`AC has been pressed. runningTotal = ${runningTotal} output.innerText = ${output.innerText}`);
    

});
const pressSeven = seven.addEventListener("click", () => {
    output.innerText = 7;
    runningTotal += 7;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 7;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 7;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressEight = eight.addEventListener("click", () => {
    output.innerText = 8;
    runningTotal += 8;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 8;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 8;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressNine = nine.addEventListener("click", () => {
    output.innerText = 9;
    runningTotal += 9;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 9;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 9;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressFour = four.addEventListener("click", () => {
    output.innerText = 4;
    runningTotal += 4;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 4;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 4;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressFive = five.addEventListener("click", () => {
    output.innerText = 5;
    runningTotal += 5;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 5;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 5;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressSix = six.addEventListener("click", () => {
    output.innerText = 6;
    runningTotal += 6;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 6;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 6;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressOne = one.addEventListener("click", () => {
    output.innerText = 1;
    runningTotal += 1;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 1;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 1;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressTwo = two.addEventListener("click", () => {
    output.innerText = 2;
    runningTotal += 2;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 2;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 2;
      console.log(`userInput1: ${userInput1}`);
    }
});

const pressThree = three.addEventListener("click", () => {
    output.innerText = 3;
    runningTotal += 3;
    console.log(`runningTotal: ${runningTotal}`);
    
    if (mathOperator !== "") {
      userInput2 += 3;
      console.log(`userInput2: ${userInput2}`);
    } else {
      userInput1 += 3;
      console.log(`userInput1: ${userInput1}`);
    }
});
const pressPlus = plus.addEventListener("click", () => {
    output.innerText = "+";
     mathOperator = "+";
     console.log(`${userInput1} + `)
});
const pressMultiply = multiply.addEventListener("click", () => {
    output.innerText = "*";
     mathOperator = "*";
     console.log(`${userInput1} * `)
});
const pressMinus = minus.addEventListener("click", () => {
    output.innerText = "-";
     mathOperator = "-";
     console.log(`${userInput1} - `)
});
const pressDivide = divide.addEventListener("click", () => {
    output.innerText = "/";
     mathOperator = "/";
     console.log(`${userInput1} / `)
});
const pressDecimal = point.addEventListener("click", () => {

});
const run = equal.addEventListener("click", () => {
    switch(mathOperator) {
        case "+":
            result = Number(userInput1) + Number(userInput2);
            console.log(`${userInput1} plus ${userInput2} equals ${result}`);
            break;
        case "-":
            result = Number(userInput1) - Number(userInput2);
            console.log(`${userInput1} minus ${userInput2} equals ${result}`);
            break;
        case "*":
            result = Number(userInput1) * Number(userInput2);
            console.log(`${userInput1} times ${userInput2} equals ${result}`);
            break;
        case "/":
            result = Number(userInput1) / Number(userInput2);
            console.log(`${userInput1} divided by ${userInput2} equals ${result}`)
            break;
    }
    
    output.innerText = result.toFixed(2);
});










// functions UNNECESSARY??
const addition = (userInput1, userInput2) =>  userInput1 + userInput2;
const multiplication = (userInput1, userInput2) => userInput1 * userInput2;
const division = (userInput1, userInput2) => userInput1 / userInput2;
const subtraction = (userInput1, userInput2) => userInput1 - userInput2;
const percentage = (userInput1, userInput2) => (100 * userInput1) / userInput2;
const allowNegativeInput = () => {}; //do I need this at all? 



/* 
Calc is adding two numbers if they are pressed before an operator.. 
*/ 
