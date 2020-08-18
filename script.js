function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op === "+") {
        return add(a, b);
    }
    else
        if (op === "-") {
            return sub(a, b);
        }
        else
            if (op === "*") {
                return mul(a, b);
            }
            else {
                return div(a, b);
            }

}

function updateDisplay() {
    display.textContent = displayValue;


}

let evaluate = () => {
    if (op) {
        displayValue = String(operate(op, +a, +b));
        updateDisplay();
        op = "";
        b = "";
        a = "";
    }


}

let a;
let b;
let op = "";
let displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".AC");
const del = document.querySelector(".DEL");
const dec = document.querySelector(".dec");
display.textContent = "0";
equal.onclick = evaluate;


del.addEventListener("click", e => {

    displayValue = displayValue.slice(0, displayValue.length - 1);
    updateDisplay();
    if (op) {
        b = displayValue;

    }

})

dec.addEventListener("click", e => {

    if (!displayValue.includes(".")) {
        displayValue += ".";
        updateDisplay();



    }



})


ac.onclick = () => {
    op = "";
    a = "";
    b = "";
    displayValue = "";
    display.textContent = "0";
    //updateDisplay();


}

numbers.forEach(number => {

    number.addEventListener("click", e => {
        displayValue += e.target.innerHTML;
        updateDisplay();
        if (op) {
            b = displayValue;

        }


    });



})

operators.forEach(operator => {

    operator.addEventListener("click", e => {

        if (b) {
            evaluate();
            //updateDisplay();
            op = e.target.innerHTML;

            if (!a) {
                a = displayValue;
            }

            displayValue = "";


        } else {

            op = e.target.innerHTML;
            if (!a) {
                a = displayValue;
            }

            displayValue = "";


        }

    })

})

window.addEventListener("keydown",e=>{
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    key.click();
    key.style.transform="scale(1.1)";
    setTimeout(() => {
        key.style.transform="scale(1)";
    }, 100);
})
