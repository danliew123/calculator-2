function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

let aNum = document.querySelector('.aNum');
let operator = document.querySelector('.operator');
let bNum = document.querySelector('.bNum')

function operate(a, b, func) {
    return func(a, b)
};