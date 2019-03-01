const proxyImpl = require('./proxy');

test('Finds stats when no proxy used', () => {
  expect(proxyImpl.batter.hr).toBe(35);
});

test('Stores batting average as a floating-point number', () => {
  expect(proxyImpl.batter.ba).toBeCloseTo(0.299);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.3, 4);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.298, 4);
});

test('Case-sensitive stats can not be found via miscasing', () => {
    expect(proxyImpl.caseSensitiveBatter.HR).toBeDefined();
    expect(proxyImpl.caseSensitiveBatter.hr).toBeUndefined();
});

test('After-proxy settings are included in lower-case', () => {
    expect(proxyImpl.lateAssignedBatterProxy.HR).toBe(9);
    expect(proxyImpl.lateAssignedBatterProxy.hr).toBe(9);
    expect(proxyImpl.lateAssignedBatterProxy.Hr).toBe(9);
});
