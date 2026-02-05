function limitAction(limit) {
    let count = 0;

    return function () {
        if (count < limit) {
            count++;
            console.log("Action executed", count);
        } else {
            console.log("Limit reached");
        }
    };
}

const action = limitAction(2);
action();
action();
action();
