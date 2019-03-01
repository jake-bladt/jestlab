const proxyImpl = require('./proxy');

test('Finds stats when no proxy used', () => {
  expect(proxyImpl.batter.hr).toBe(35);
});
