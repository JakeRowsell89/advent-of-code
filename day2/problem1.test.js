const test = require('ava')
const p1 = require('./problem1')
const p2 = require('./problem2')

test('Example works', (test) => {
  test.is(p1('ULL\nRRDDD\nLURDL\nUUUUUD'), '1985')
  test.is(p2('ULL\nRRDDD\nLURDL\nUUUUUD'), '5DB3')
})
