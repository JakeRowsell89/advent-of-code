const test = require('ava')
const problem1 = require('./problem1.js')

test('Basic inputs work 1', (test) => {
  test.is(problem1('ADVENT'), 6)
})

test('Basic inputs work 2', test => {
  test.is(problem1('A(1x5)BC'), 7)
})

test('Basic inputs work 3', test => {
  test.is(problem1('(3x3)XYZ'), 9)
})

test('Basic inputs work 4', test => {
  test.is(problem1('A(2x2)BCD(2x2)EFG'), 11)
})

test('Basic inputs work 5', test => {
  test.is(problem1('(6x1)(1x3)A'), 6)
})

test('Basic inputs work 6', test => {
  test.is(problem1('X(8x2)(3x3)ABCY'), 18)
})
