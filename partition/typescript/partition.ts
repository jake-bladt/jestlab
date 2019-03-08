declare global {
    interface Array<T> {
        partition: any;
    }
}

Array.prototype.partition = (f) => {
    const _addToObject = (baseObj, key, val) => {
        let prop = baseObj[key];
        if(!Array.isArray(prop)) prop = [];
        prop[val].push(key);
    };

}

export {}
