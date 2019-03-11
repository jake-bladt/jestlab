declare global {
    interface Array<T> {
        partition: any;
    }
}

Array.prototype.partition = ((f, target?:{}) => {

    const _addToObject = (baseObj, key, val) => {
        let prop = baseObj[key];
        if(!Array.isArray(prop)) prop = [];
        prop[val].push(key);
    }

    const accumulator = target || {};
    return Array.prototype.reduce(this, (accumulator, e) => this._addToObject(accumulator, f(e), e));
}).bind(this);

export {}

const nums: number[] = [1, 2, 0, 7, 14, 5, 3];
const parts = nums.partition(n => n <= 7);
console.log(parts);
