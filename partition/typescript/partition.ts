declare global {
    interface Array<T> {
        partition: any;
    }
}

Array.prototype.partition = (f, target?:{}) => {
    const _addToObject = (baseObj, key, val) => {
        let prop = baseObj[key];
        if(!Array.isArray(prop)) prop = [];
        prop[val].push(key);
    };

    const accumulator = target || {};
    return this.reduce(accumulator, e => _addToObject(accumulator, f(e), e));
}

export {}
