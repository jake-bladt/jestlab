const batter = {
  ba: 0.299,
  hr: 35
};

const caseSensitiveBatter = {
    BA: 0.287,
    HR: 29,
    firstName: 'John'
};

const caseInsensitveSettingsTraps = (() => {
    const internalLcStats = [];

    return {
        get: (obj, prop) => {
            return prop in obj ? obj[prop] : internalLcStats[prop.toLowerCase()]; 
        },
        set: (obj, prop, value) => {
            internalLcStats[prop.toLowerCase()] = value;
            obj[prop] = value;
        }
    };
})();

const lateAssignedBatterProxy = new Proxy({}, caseInsensitveSettingsTraps);
lateAssignedBatterProxy.HR = 9;
lateAssignedBatterProxy.SB = 22;

const indirectBatterProxy = new Proxy({...caseSensitiveBatter}, caseInsensitveSettingsTraps);
const directBatterProxy = new Proxy(caseSensitiveBatter, caseInsensitveSettingsTraps);

module.exports = { 
    batter, 
    caseSensitiveBatter, 
    lateAssignedBatterProxy,
    indirectBatterProxy,
    directBatterProxy
 };
