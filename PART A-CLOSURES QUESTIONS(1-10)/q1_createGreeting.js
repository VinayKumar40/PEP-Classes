function createGreeting(name) {
    return function () {
        document.body.innerHTML += `<p>Hello, ${name}</p>`;
    };
}

const greet = createGreeting("Vinay");
greet();
