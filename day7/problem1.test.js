const test = require('ava')
const problem = require('./problem1')
const problem2 = require('./problem2.js')

// test('Example input 1 works', test => {
//   test.is(problem('abba[mnop]qrst\n'), true)
// })
//
// test('Example input 2 works', test => {
//   test.is(problem('abcd[bddb]xyyx\n'), false)
// })
//
// test('Example input 3 works', test => {
//   test.is(problem('aaaa[qwer]tyui\n'), false)
// })
//
// test('Example input 4 works', test => {
//   test.is(problem('ioxxoj[asdfgh]zxcvbn\n'), true)
// })

test('Example input 4 works', test => {
  test.is(problem('ioxxoj[asdfgh]zxcvbn\nabcd[bddb]xyyx\naaaa[qwer]tyui\nioxxoj[asdfgh]zxcvbn\n'), 2)
})

// test('Example 2 input 1 works', test => {
//   test.is(problem2('aba[bab]xyz\n'), true)
// })
//
// test('Example 2 input 2 works', test => {
//   test.is(problem2('xyx[xyx]xyx\n'), false)
// })
//
// test('Example 2 input 3 works', test => {
//   test.is(problem2('aaa[kek]eke\n'), true)
// })
//
// test('Example 2 input 4 works', test => {
//   test.is(problem2('zazbz[bzb]cdb\n'), true)
// })

test('Example input 4 works', test => {
  test.is(problem2('aba[bab]xyz\nxyx[xyx]xyx\naaa[kek]eke\nzazbz[bzb]cdb\n'), 3)
})
