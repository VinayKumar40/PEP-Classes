// function createCalculator() {
//     let result = 0;

//     return {
//         add(num) {
//             result += num;
//             return result;
//         },
//         subtract(num) {
//             result -= num;
//             return result;
//         },
//         multiply(num) {
//             result *= num;
//             return result;
//         },
//         divide(num) {
//             if (num === 0) return "Error";
//             result /= num;
//             return result;
//         },
//         getResult() {
//             return result;
//         },
//         reset() {
//             result = 0;
//             return result;
//         }
//     };
// }

// const calc = createCalculator();

// console.log(calc.add(10));
// console.log(calc.subtract(2));
// console.log(calc.multiply(4));
// console.log(calc.divide(8));
// console.log(calc.getResult());
// console.log(calc.reset());









// function createCalculator() {
//     let result = 0;
//     let inputSum = 0;

//     return {
//         add(num) {
//             inputSum += num;
//             result += num;
//             return result;
//         },
//         subtract(num) {
//             inputSum += num;
//             result -= num;
//             return result;
//         },
//         multiply(num) {
//             inputSum += num;
//             result *= num;
//             return result;
//         },
//         divide(num) {
//             if (num === 0) return "Error";
//             inputSum += num;
//             result /= num;
//             return result;
//         },
//         getResult() {
//             return result;
//         },
//         getInputSum() {
//             return inputSum;
//         }
//     };
// }

// const calc = createCalculator();

// const addResult = calc.add(10);
// const subResult = calc.subtract(3);
// const mulResult = calc.multiply(4);
// const divResult = calc.divide(2);

// console.log("Addition result is:", addResult);
// console.log("Subtraction result is:", subResult);
// console.log("Multiply result is:", mulResult);
// console.log("Divide result is:", divResult);
// console.log("Sum of all inputs here:", calc.getInputSum());





function sum(...n) {
  return n.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));
