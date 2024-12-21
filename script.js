//ID's from index, all buttons

const output = document.getElementById("output");
const clear = document.getElementById("AC");
const negativeToggle = document.getElementById("plusminusdiv");
const percent = document.getElementById("percent");
const divide = document.getElementById("divice");
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

//event listeners will go below here .. need event listener on every button => add to output
//value and add to runningTotal 
//need isPreviousInput to check if theres a previous input, if so add the new input as 
// userInput 2. if there is no previous, then assign as userInput 1.
const run = equal.addEventListener("click", () => {
    output.value = runningTotal; //set the output to the hidden running total
});
const clearAll = clear.addEventListener("click", () => {
    output.value = "";
    runningTotal = 0;
    console.log(`AC has been pressed. runningTotal = ${runningTotal} output.value = ${output.value}`);
});
const pressSeven = seven.addEventListener("click", () => {
    output.value = 7;
    runningTotal = 
})








// functions 
const addition = (userInput1, userInput2) =>  userInput1 + userInput2;
const multiply = (userInput1, userInput2) => userInput1 * userInput2;
const division = (userInput1, userInput2) => userInput1 / userInput2;
const subtraction = (userInput1, userInput2) => userInput1 - userInput2;
const percentage = (userInput1, userInput2) => (100 * userInput1) / userInput2;
const allowNegativeInput = () => {}; //do I need this at all? 
