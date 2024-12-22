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

runningTotal = 0;

//event listeners will go below here .. need event listener on every button => add to output
//value and add to runningTotal 
//need isPreviousInput to check if theres a previous input, if so add the new input as 
// userInput 2. if there is no previous, then assign as userInput 1.

const clearAll = clear.addEventListener("click", () => {
    output.innerText = "";
    runningTotal = 0;
    console.log(`AC has been pressed. runningTotal = ${runningTotal} output.innerText = ${output.innerText}`);

});
const pressSeven = seven.addEventListener("click", () => {
    output.innerText = 7;
    runningTotal = 0;
});
const pressEight = eight.addEventListener("click", () => {
    output.innerText = 8;
    runningTotal = 0;
});
const pressNine = nine.addEventListener("click", () => {
    output.innerText = 9;
    runningTotal = 0;
});
const pressMultiply = multiply.addEventListener("click", () => {

});
const pressFour = four.addEventListener("click", () => {
    output.innerText = "4";
    runningTotal = 0;
});
const pressFive = five.addEventListener("click", () => {
    output.innerText = 5;
    runningTotal = 0;
});
const pressSix = six.addEventListener("click", () => {
    output.innerText = 6;
    runningTotal = 0;
});
const pressMinus = minus.addEventListener("click", () => {

});
const pressOne = one.addEventListener("click", () => {
    output.innerText = 1;
    runningTotal = 0;
});
const pressTwo = two.addEventListener("click", () => {
    output.innerText = 2;
    runningTotal = 0;
});
const pressThree = three.addEventListener("click", () => {
    output.innerText = 3;
    runningTotal = 0;
});
const pressPlus = plus.addEventListener("click", () => {

});
const pressDecimal = point.addEventListener("click", () => {

});
const run = equal.addEventListener("click", () => {
    output.innerText = runningTotal; //set the output to the hidden running total
    console.log(`= has been pressed. runningTotal = ${runningTotal} output.innerText = ${output.innerText}`);
});








// functions 
const addition = (userInput1, userInput2) =>  userInput1 + userInput2;
const multiplication = (userInput1, userInput2) => userInput1 * userInput2;
const division = (userInput1, userInput2) => userInput1 / userInput2;
const subtraction = (userInput1, userInput2) => userInput1 - userInput2;
const percentage = (userInput1, userInput2) => (100 * userInput1) / userInput2;
const allowNegativeInput = () => {}; //do I need this at all? 

