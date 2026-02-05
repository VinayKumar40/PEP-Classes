const heading = document.createElement("h2");
heading.innerText = "Simple Calculator";
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
result.innerText = "Result: ";
document.body.appendChild(result);



function getValues() {
    const a = Number(input1.value);
    const b = Number(input2.value);
    return { a, b };
}

function add() {
    const { a, b } = getValues();
    result.innerText = "Result: " + (a + b);
}

function subtract() {
    const { a, b } = getValues();
    result.innerText = "Result: " + (a - b);
}

function multiply() {
    const { a, b } = getValues();
    result.innerText = "Result: " + (a * b);
}

function divide() {
    const { a, b } = getValues();
    if (b === 0) {
        result.innerText = "Result: Cannot divide by zero";
    } else {
        result.innerText = "Result: " + (a / b);
    }
}



function createButton(text, handler) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.addEventListener("click", handler);
    document.body.appendChild(btn);
}

createButton("Add", add);
createButton("Subtract", subtract);
createButton("Multiply", multiply);
createButton("Divide", divide);
