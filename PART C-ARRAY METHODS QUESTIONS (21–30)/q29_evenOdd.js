const nums = [1,2,3,4,5,6];
console.log({
    even: nums.filter(n => n % 2 === 0),
    odd: nums.filter(n => n % 2 !== 0)
});
