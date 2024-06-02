function addition(a, b) {
    return a + b
};

function subtraction(a, b) {
    return a - b
};

function multiplication(a, b) {
    return a * b
};

function division(a, b) {
    return a / b
};

const aNum = document.querySelector('.aNum');
let aa = ''
const operator = document.querySelector('.operator');
let oo = ''
const bNum = document.querySelector('.bNum')
let bb = ''

function operate(a, b, func) {
    return func(+a, +b)
};

const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')


zero.addEventListener('click',() => {
    console.log(0);
    if(!oo) {
        aNum.textContent += '0'
        aa += '0'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '0'
        bb += '0'
    }
})

one.addEventListener('click',() => {
    console.log(1);
    if(!oo) {
        aNum.textContent += '1';
        aa += '1'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '1';
        bb += '1'
    }
})

two.addEventListener('click',() => {
    console.log(2);
    if(!oo) {
        aNum.textContent += '2';
        aa += '2'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '2';
        bb += '2'
    }
})

three.addEventListener('click',() => {
    console.log(3);
    if(!oo) {
        aNum.textContent += '3';
        aa += '3'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '3';
        bb += '3'
    }
})

four.addEventListener('click',() => {
    console.log(4);
    if(!oo) {
        aNum.textContent += '4';
        aa += '4'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '4';
        bb += '4'
    }
})

five.addEventListener('click',() => {
    console.log(5);
    if(!oo) {
        aNum.textContent += '5';
        aa += '5'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '5';
        bb += '5'
    }
})

six.addEventListener('click',() => {
    console.log(6);
    if(!oo) {
        aNum.textContent += '6';
        aa += '6'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '6';
        bb += '6'
    }
})

seven.addEventListener('click',() => {
    console.log(7);
    if(!oo) {
        aNum.textContent += '7';
        aa += '7'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '7';
        bb += '7'
    }
})

eight.addEventListener('click',() => {
    console.log(8);
    if(!oo) {
        aNum.textContent += '8';
        aa += '8'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '8';
        bb += '8'
    }
})

nine.addEventListener('click',() => {
    console.log(9);
    if(!oo) {
        aNum.textContent += '9';
        aa += '9'
    } else {
        aa = parseInt(aNum.textContent)
        bNum.textContent += '9';
        bb += '9'
    }
})

add.addEventListener('click', () => {
    console.log('+')
    if(aa === '') {
        return
    } else if(bb === '') {
        operator.textContent = '+'
        oo = addition
    } else if(bb) {
        aa = operate(aa, bb, oo);
        console.log(aa)
        aNum.textContent = aa
        oo = addition;
        operator.textContent = '+'
        bb = ''
        bNum.textContent = ''
    }
})

equal.addEventListener('click', () => {
    if(aa && oo && bb) {
        aa = operate(aa, bb, oo)
        aNum.textContent = aa
        oo = ''
        operator.textContent = ''
        bb = ''
        bNum.textContent = ''
    }
})

clear.addEventListener('click', () => {
    aa = ''
    aNum.textContent = ''
    oo = ''
    operator.textContent = ''
    bb = ''
    bNum.textContent = ''
})