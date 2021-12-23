const operators = { '+': add, '-': sub, '*': mult, '/': div };
const selectedOperator = enterOperator(operators);
const quantityOfNumbers = enterQuantityOfOperators();
const serialNumbers = ['first', 'second', 'third', 'fourth'];
const arrayOfNumbers = enterNumbers(quantityOfNumbers, serialNumbers);
const result = arrayOfNumbers.reduce(operators[selectedOperator]);

console.log(operators[selectedOperator]);
console.log(arrayOfNumbers);
console.log(result);
printResult(arrayOfNumbers, selectedOperator, result);

function add(firstNumber, secondNumber) {
    return  firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return  firstNumber - secondNumber;
}

function mult(firstNumber, secondNumber) {
    return  firstNumber * secondNumber;
}

function div(firstNumber, secondNumber) {
    return  firstNumber / secondNumber;
}

function printResult(arrayOfNumbers, selectedOperator, result) {
    return console.log(`${arrayOfNumbers.join(` ${selectedOperator} `)} = ${result}`);
 }

function enterQuantityOfOperators() {
    let quantityOfNumbers = null;
    do {
        quantityOfNumbers = enterNumber('quantity of');
    }
    while (!(quantityOfNumbers > 1 && quantityOfNumbers < 5));

    return quantityOfNumbers;
}

function enterNumber(serialNumber) {
    let number = NaN;
    do {
        number = prompt(`Enter the ${serialNumber} number`);
        number = Number(number);
    }
    while (isNaN(number));

    return number;
}

function enterNumbers(quantityOfNumbers, serialNumbers) {
    const enteredNumbers = [];
    for (let index = 0; quantityOfNumbers > index; index++) {
        const number = enterNumber(serialNumbers[index]);
        enteredNumbers.push(number);
    }

    return enteredNumbers;
}

function enterOperator(operators) {
    let operator = null;
    do {
        operator = prompt("What do you want to do?");
    } while (!operators[operator]);

    return operator;
}