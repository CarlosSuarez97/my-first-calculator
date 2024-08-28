let operation = []
let currentIndex = 0
let result = ''

const buttons = document.querySelectorAll('button')
const displayValue = document.querySelector('#calculatorDisplay')

function isNumber(value) {
    return (
        value == 0 || value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9
    )
}

function isSymbol(value) {
    return (
        value == '+' || value == '-' || value == '*' || value == '/' || value == "."
    )
}

function handleInput(newValue) {

    if (isNumber(newValue)) {

        if (operation[currentIndex] !== undefined) {
            operation[currentIndex] = operation[currentIndex] + newValue
        } else {
            operation[currentIndex] = newValue
        }

    } else if (isSymbol(newValue)) {

        if (currentIndex === 0 && (newValue == '+' || newValue == '-') && operation[currentIndex] == undefined) {
            operation[currentIndex] = newValue
            currentIndex++
        } else if (operation[currentIndex] !== undefined) {
            currentIndex++
            operation[currentIndex] = newValue
            currentIndex++
        } else if (operation[currentIndex] == undefined && newValue == '.') {
            operation[currentIndex] == '0';
            currentIndex++;
            operation[currentIndex] == newValue;
            console.log(operation);

        } else if (operation[currentIndex] == '.' && newValue == '.') {
            operation.splice(currentIndex, currentIndex, newValue);
            currentIndex++;
        }

    } else if (newValue === '=' || newValue == 'Enter') {

        result = eval(operation.join(''))

    }

    if (result != '') {
        displayValue.innerHTML = result
    } else if (operation[currentIndex] == undefined) {
        displayValue.innerHTML = operation.join('')
    } else {
        displayValue.innerHTML = operation.join('');
    }
}

buttons.forEach(function (button) {
    button.onclick = function () { handleInput(button.innerHTML) }
})

document.querySelector('.clear').addEventListener('click', function () {
    result = ''
    operation = []
    currentIndex = 0
    displayValue.innerHTML = ''
})

document.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (isNumber(event.key) || isSymbol(event.key) || event.key === '=' || event.key == 'Enter') {
        handleInput(event.key)
    }
});
