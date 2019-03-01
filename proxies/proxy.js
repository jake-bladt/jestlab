const batter = {
  ba: 0.299,
  hr: 35
};

const caseSensitiveBatter = {
    BA: 0.287,
    HR: 29,
    firstName: 'John'
};

const getCaseInsensitveSettingsTraps = (() => {
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
});

const indirectBatterProxy = new Proxy({...caseSensitiveBatter}, getCaseInsensitveSettingsTraps());
const directBatterProxy = new Proxy(caseSensitiveBatter, getCaseInsensitveSettingsTraps());

const lateAssignedBatterProxy = new Proxy({}, getCaseInsensitveSettingsTraps());
lateAssignedBatterProxy.HR = 9;
lateAssignedBatterProxy.SB = 22;

module.exports = { 
    batter, 
    caseSensitiveBatter, 
    lateAssignedBatterProxy,
    indirectBatterProxy,
    directBatterProxy
 };
