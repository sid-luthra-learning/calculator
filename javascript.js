// Display things on the screen

const screen = document.querySelector("#display");

const display = (output) => {
    screen.textContent = output;    
}

// Clear things

const clearButton = document.querySelector("#clear");

const clearAll = () => {
    input1 = 0;
    input2 = 0;
    result = 0;
    operator = "addition";
    display(input2);
}

const clearInput = () => {
    input2 = 0;
    display(input2);
    working = false;
    clearButton.textContent = "AC";
}

clearButton.addEventListener('click', () => {
    working ? clearInput() : clearAll()
});

// Input numbers

const digitKeys = document.querySelectorAll(".digit-key");
digitKeys.forEach((button) => {
    button.addEventListener('click', () => addDigitToInput(button.id))
});

const addDigitToInput = (digit) => {
    if (decimal) {
        input2 = Number.parseFloat(input2 + "." + Number.parseInt(digit));
    } else {
        input2 = 10 * input2 + Number.parseInt(digit);
    }
    display(input2);
    working = true;
    clearButton.textContent = "C";
}

const decPoint = document.querySelector("#btnDec");
decPoint.addEventListener('click', () => {
    decimal = true;
    display(input2 + ".");
})

// Do operations

const operatorKeys = document.querySelectorAll(".operator-key");
operatorKeys.forEach((button) => {
    button.addEventListener('click', () => {
        result = operate(operator, input1, input2);
        display(result);
        operator = button.id;
        if (operator === "equals") {
            operator = "none";
        };
        //     input1 = 0;
        //     input2 = result;
        // } else {
            input1 = result;
            input2 = 0;
        // }
        decimal = false;
    })
});

const operate = (operator, input1, input2) => {
    a = Number.parseFloat(input1);
    b = Number.parseFloat(input2);
    switch (operator) {
        case 'none':
            return input1;
        case 'equals':
            return input2;
        case 'addition':
            return input1 + input2;
        case 'subtraction':
            return input1 - input2;
        case 'multiplication':
            return input1 * input2;
        case 'division':
            return input1 / input2;
    }
}

const percentKey = document.querySelector("#percent");
percentKey.addEventListener('click', () => {
    input2 = input2 / 100;
    display(input2);
})

const switchSign = document.querySelector("#switch-sign");
switchSign.addEventListener('click', () => {
    input2 = input2 * -1;
    display(input2);
})

let input1 = 0;
let input2 = 0;
let output = 0;
let result = 0;
let operator = "equals";
let decimal = false;