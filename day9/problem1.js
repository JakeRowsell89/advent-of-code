// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

module.exports = function (input) {
  return init(null, input)
}

function init (e, input) {
  let str = input.trim().expandTokens()
  console.log(str.length)
  return str.length
}

String.prototype.expandTokens = function () { // eslint-disable-line
  let result = ''
  let str = this

  while (str.length) {
    const idx = str.indexOf('(')
    if (idx !== -1) {
      result += str.slice(0, idx)
      let expanded = splitByFirstToken(str.slice(idx))
      result += expanded.head
      str = expanded.tail
    } else {
      result += str
      str = ''
    }
  }

  return result
}

function splitByFirstToken (str) { // eslint-disable-line
  const idx = str.indexOf(')')

  if (idx !== -1) {
    const token = str.slice(0, idx + 1).replace(/\(|\)/g, '').split('x')
    const temp = str.slice(idx + 1)
    let chars = parseInt(token[0], 10)
    const reps = parseInt(token[1], 10)
    let i = 0
    let waitForClose = false
    while (i < chars) {
      i++
      if (waitForClose) {
        chars++
        if (temp[i] === ')') {
          waitForClose = false
        }
      } else if (temp[i] === '(') {
        chars++
        waitForClose = true
      }
    }
    return {
      head: temp.slice(0, chars).repeat(reps),
      tail: temp.slice(chars)
    }
  } else {
    return {
      head: str,
      tail: ''
    }
  }
}
