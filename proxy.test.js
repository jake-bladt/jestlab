const proxyImpl = require('./proxy');

test('Finds stats when no proxy used', () => {
  expect(proxyImpl.batter.hr).toBe(35);
});

test('Stores batting average as a floating-point number', () => {
  expect(proxyImpl.batter.ba).toBeCloseTo(0.299);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.3, 4);
  expect(proxyImpl.batter.ba).not.toBeCloseTo(0.298, 4);
});
