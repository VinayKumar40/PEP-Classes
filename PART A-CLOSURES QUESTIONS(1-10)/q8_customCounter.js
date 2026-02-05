function counter(step) {
    let count = 0;

    return function () {
        count += step;
        return count;
    };
}

const countByTwo = counter(2);
console.log(countByTwo());
