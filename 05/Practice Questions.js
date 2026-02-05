// Question 1: Create a counter using closure with methods: increment(), decrement(), reset().

JavaScript
function createCounter() {
    let count = 0; 
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset());     // 0

// Question 2: Create a private bank account using closure with methods: deposit(amount), withdraw(amount), getBalance().

JavaScript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: (amount) => {
            balance += amount;
            return `Balance: ${balance}`;
        },
        withdraw: (amount) => {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return `Balance: ${balance}`;
        },
        getBalance: () => balance
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));    // Balance: 150
console.log(account.withdraw(30));   // Balance: 120
console.log(account.getBalance());    // 120

// Question 3: Create a function once(fn) that allows a function to run only one time.

JavaScript
function once(fn) {
    let hasRun = false;
    let result;
    return function(...args) {
        if (!hasRun) {
            hasRun = true;
            result = fn(...args);
            return result;
        }
        return "Already executed";
    };
}

const initialize = once(() => "System Initialized");
console.log(initialize()); // System Initialized
console.log(initialize()); // Already executed

// Question 4: Create a multiplier factory function multiplyBy(x) that returns functions like double(5), triple(5).

JavaScript
function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Question 5: Create a secure password checker using closure: createPassword('admin123') should return a function to validate input.

JavaScript
function createPassword(savedPassword) {
    return function(inputPassword) {
        return inputPassword === savedPassword;
    };
}

const validate = createPassword('admin123');
console.log(validate('guest'));    // false
console.log(validate('admin123')); // true