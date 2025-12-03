let firstNum = "";
let secondNum = "";
let operator = "";
let screen = document.getElementById("screen");

function calc(a) {

    a = String(a); 
    if (a >= "0" && a <= "9") {
        screen.innerText += a;
    }
    else if (a === "+" || a === "-" || a === "*" || a === "/") {

        if (firstNum === "") {
            firstNum = screen.innerText;   
            operator = a;                  
            screen.innerText = "";         
        } 
        else if (screen.innerText !== "") {
            secondNum = screen.innerText;

            let result = calculate(firstNum, operator, secondNum);
            screen.innerText = result;
            firstNum = result;
            operator = a;
            screen.innerText = "";
        } 
        else {
            operator = a;
        }
    }
    else if (a === "c") {
        screen.innerText = "";
        firstNum = "";
        secondNum = "";
        operator = "";
    }
    else if (a === "=") {

        if (operator !== "") {
            secondNum = screen.innerText;

            let result = calculate(firstNum, operator, secondNum);

            screen.innerText = result;
            firstNum = "";
            secondNum = "";
            operator = "";
        }
    }
}
function calculate(a, op, b) {
    a = Number(a);
    b = Number(b);

    if (op === "+") {
        return a + b;
    }
    else if (op === "-") {
        return a - b;
    }
    else if (op === "*") {
        return a * b;
    }
    else if (op === "/") {
        if (b === 0) {
            return "Error";
        } else {
            return a / b;
        }
    }
}