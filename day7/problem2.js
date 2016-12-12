// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

module.exports = function (input) {
  return init(null, input)
}

function init (e, input) {
  const rows = input.trim().split('\n')
  const amount = rows.filter(row => {
    return supportsSSL(row)
  }).length

  return amount
}

function supportsSSL (ip) {
  const parts = ip.splitByMultiple(['[', ']'])
  const outsideBrackets = []
  const insideBrackets = []

  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      outsideBrackets.push(part)
    } else {
      insideBrackets.push(part)
    }
  })
  const outsideSequences = getSequences(outsideBrackets)
  const insideMatches = sequenceMatches(outsideSequences, insideBrackets)

  return insideMatches
}

function sequenceMatches (sequences, insideBrackets) {
  return sequences.reduce(function (p, sequence) {
    return p || insideBrackets.join('||||').indexOf(sequence) > -1
  }, false)
}

function getSequences (rows) {
  let sequences = []

  rows.forEach(row => {
    sequences = sequences.concat(getSequencesForRow(row))
  })

  return sequences
}

function getSequencesForRow (str) {
  const sequences = []
  for (var i = 2; i < str.length; i++) {
    if (str[i] === str[i - 2] && str[i - 1] !== str[i]) {
      sequences.push(str[i - 1] + str[i] + str[i - 1])
    }
  }

  return sequences
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
