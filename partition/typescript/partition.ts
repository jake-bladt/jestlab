declare global {
    interface Array<T> {
        partition: any;
    }
}

Array.prototype.partition = (f, target?:{}) => {
    const _this = this;

    const _addToObject = (baseObj, key, val) => {
        let prop = baseObj[key];
        if(!Array.isArray(prop)) prop = [];
        prop[val].push(key);
    };

    const accumulator = target || {};
    return _this.reduce(accumulator, e => _addToObject(accumulator, f(e), e));
}

export {}

const nums: number[] = [1, 2, 0, 7, 14, 5, 3];
// const parts = nums.partition(n => n <= 7);
const red = nums.reduce((_, n) => _ + n, 0);
console.log(red);
