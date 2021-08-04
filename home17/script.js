// //////////////////////////////////
function closure() {
    let a = 0;

    return function(zp) {
        return a = a + zp;
    };
}
const budget = closure();
console.log(budget(3))
console.log(budget(3))
console.log(budget(3))

// //////////////////////////////////////////

const multiple = (a, b) => {
    const stamp = new Date().getTime();
    while (new Date().getTime() < stamp + 2000) {}
    return a * b;
};

function cacheDecorator(func) {
    const cache = {};
    return function(a, b) {
        let result;
        console.log(cache);
        if (cache[`${a}-${b}`]) {
            result = cache[`${a}-${b}`];
        } else {
            result = func(a, b);
            cache[`${a}-${b}`] = result;
        }

        return result;
    };
}

const cachedMultiple = cacheDecorator(multiple);