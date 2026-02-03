let arr = [1, 23, 47, 65, 62]; 
let set = 50;

let e = arr.filter(num => num > set && num % 2 === 0);

console.log("Even numbers greater than 50:", e);
