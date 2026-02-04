// let myPromise = new Promise((resolve, reject) => {
//     let success = true;   

//     if (success) {
//         resolve("Promise fulfilled");
//     } else {
//         reject("Promise not fulfilled");
//     }
// });
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("MyPromise resolved successfully");
//     }, 1000);
// });








// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Resolved work after 2 seconds");
//     }, 2000);
// });

// p1
// .then((value) => {
//     console.log(value);

//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Resolved work after another 2 seconds");
//         }, 2000);
//     });

//     return p2;   
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });



// Maggie code with the help of promises
function buymaggie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("buy the maggie");
            console.log("Maggie got it");
            resolve();
        }, 1000);
    });
}

function openmaggie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Start opening maggie");
            resolve();
        }, 1000);
    });
}

function preparemaggie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Maggie is prepared");
            resolve();
        }, 1000);
    });
}

function eatmaggie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Maggie eaten");
            resolve();
        }, 1000);
    });
}

function finishmaggie() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Maggie Eating done");
            resolve();
        }, 1000);
    });
}

// Promise chaining
buymaggie()
    .then(openmaggie)
    .then(preparemaggie)
    .then(eatmaggie)
    .then(finishmaggie)
    .catch(() => {
        console.log("Something went wrong 😢");
    });
