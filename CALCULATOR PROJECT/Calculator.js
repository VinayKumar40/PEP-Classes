const heading = document.createElement("h2");
heading.textContent = "Simple Calculator (DOM Based)";
document.body.appendChild(heading);

const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Enter first number";
document.body.appendChild(input1);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Enter second number";
document.body.appendChild(input2);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

const result = document.createElement("h3");
result.textContent = "Result: ";
document.body.appendChild(result);

function getNumbers() {
    return {
        a: Number(input1.value),
        b: Number(input2.value)
    };
}

function add() {
    const { a, b } = getNumbers();
    result.textContent = "Result: " + (a + b);
}

function subtract() {
    const { a, b } = getNumbers();
    result.textContent = "Result: " + (a - b);
}

function multiply() {
    const { a, b } = getNumbers();
    result.textContent = "Result: " + (a * b);
}

function divide() {
    const { a, b } = getNumbers();
    if (b === 0) {
        result.textContent = "Result: Cannot divide by zero";
    } else {
        result.textContent = "Result: " + (a / b);
    }
}

function createButton(text, handler) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", handler);
    document.body.appendChild(btn);
}

createButton("Add", add);
createButton("Subtract", subtract);
createButton("Multiply", multiply);
createButton("Divide", divide);
