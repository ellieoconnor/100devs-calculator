// define calculator in a class (handles logic)
// properties: total
// methods: add, subtract, multiply, divide,
// display or updateDisplay, clear
class Calculator {
    currentNumberValue = '';
    previousNumberValue = '';
    operator = null;

    add() {
    }

    subtract() {
    }

    multiply() {
    }

    divide() {
    }

    equalsEvaluate(prevNum, currNum, op) {
        switch (op) {
            case "+":
                this.add(prevNum, currNum);
                break;
            case "-":
                this.subtract(prevNum, currNum);
                break;
            case "X":
                this.multiply(prevNum, currNum);
                break;
            case "/":
                this.divide(prevNum, currNum);
                break;
        }

    }
}

// HTML interaction (handles UI)
const calculator = new Calculator();

/**
 * Number Buttons:
 * When a number button is clicked, check if the currentNumberValue is empty.
 * If it's empty, start building the currentNumberValue by concatenating the button's value.
 * If it's not empty, continue concatenating the button's value to the currentNumberValue.
 */
const numberButtons = document.getElementsByClassName('number'); // gets all elements with this class and stores them
Array.from(numberButtons).forEach(button => {
    button.addEventListener('click', () => {
        // concatenates the clicked digit to the currentNumberValue
        calculator.currentNumberValue += button.textContent;

        // update the display
        updateDisplay(calculator.currentNumberValue);
    })
})

/**
 * Updates the calculator display to show the currentNumber operator and previousNumber
 */
function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}


/**
 * Operator Buttons:
 * When an operator button is clicked:
 * Store the currentNumberValue in the previousNumberValue
 * Clear currentNumberValue to prepare for the next number input.
 * Store the operator for later use in the calculation.
 */
const operatorButtons = document.getElementsByClassName('operator');
Array.from(operatorButtons).forEach(opButton => {
    opButton.addEventListener('click', () => {
        calculator.previousNumberValue = calculator.currentNumberValue;
        calculator.currentNumberValue = '';
        calculator.operator = opButton.textContent;

        updateDisplay(calculator.operator);
    })
})

/**
 * Equals Button:
 * When equal is clicked:
 * Pass previousNumberValue, currentNumberValue, and the operator to the Calculator class.
 * Perform the calculation and return the result.
 * Display the result and reset the state if needed.
 */
const equalButton = document.getElementById('equal-button').addEventListener('click', () => {
    calculator.equalsEvaluate(previousNumber, currentNumber, operator);
    updateDisplay()
});
