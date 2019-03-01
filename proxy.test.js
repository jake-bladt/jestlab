const proxyImpl = require('./proxy');

test('Finds stats when no proxy used', () => {
  expect(proxyImpl.batter.hr).toBe(35);
});

test('Stores batting average as a floating-point number', () => {
  expect(proxyImpl.batter.ba).toBeCloseTo(0.299);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.3, 4);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.298, 4);
});

test('After-proxy assignments create a case-insensitive setting that can be retrieved', () => {
    proxyImpl.directBatterProxy.RBI = 100;
    expect(proxyImpl.directBatterProxy.rbi).toBe(100);
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

test('Direct proxy early assignments are not included', () => {
    expect(proxyImpl.directBatterProxy.HR).toBe(29);
    expect(proxyImpl.directBatterProxy.hr).toBeUndefined();
});

test('Indirect proxy early assignments are not included', () => {
    expect(proxyImpl.indirectBatterProxy.HR).toBe(29);
    expect(proxyImpl.indirectBatterProxy.hr).toBeUndefined();
});

test('Direct proxy assignments write back to original object', () => {
  proxyImpl.directBatterProxy.HR = 40;
  expect(proxyImpl.caseSensitiveBatter.HR).toBe(40);
});

test('Indirect proxy assignments do not write back to original object', () => {
    proxyImpl.indirectBatterProxy.SB = 4;
    expect(proxyImpl.caseSensitiveBatter.SB).toBeUndefined();
  });

test('After-proxy assignments create a case-insensitive setting that can be retrieved', () => {
    proxyImpl.directBatterProxy.RBI = 100;
    expect(proxyImpl.directBatterProxy.rbi).toBe(100);
});
