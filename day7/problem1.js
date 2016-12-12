// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

module.exports = function (input) {
  return init(null, input)
}

function init (e, input) {
  const rows = input.trim().split('\n')
  const amount = rows.filter(row => {
    return supportsTLS(row)
  }).length
  console.log(amount)
  return amount
}

function supportsTLS (ip) {
  // does ip contain any xyyx sequence
  // if so, does the square bracket NOT contain such a sequence
  const parts = ip.splitByMultiple(['[', ']'])
  // splits into
  const outsideBrackets = []
  const insideBrackets = []

  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      outsideBrackets.push(part)
    } else {
      insideBrackets.push(part)
    }
  })

  const occursInside = sequenceOccurs(insideBrackets.join('----'))

  if (occursInside) {
    return false
  } else {
    return sequenceOccurs(outsideBrackets.join('----'))
  }
}

function sequenceOccurs (str) {
  for (var i = 3; i < str.length; i++) {
    if (str[i] === str[i - 3] && str[i - 1] === str[i - 2] && str[i] !== str[i - 1]) {
      return true
    }
  }
  return false
}

String.prototype.splitByMultiple = function (characters) { // eslint-disable-line
  let result = [this]

  characters.forEach(function (character) {
    result = result.reduce(function (ar, str) {
      return ar.concat(str.split(character))
    }, [])
  })

  return result
}
