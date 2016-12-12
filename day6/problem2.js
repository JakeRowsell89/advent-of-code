const fs = require('fs')
fs.readFile('./input.txt', 'utf-8', init)

function init (e, input) {
  const rows = input.trim().split('\n')
  let dict = {}
  rows.forEach(function (row) {
    row.split('').forEach(function (char, i) {
      dict[i] = dict[i] || ''
      dict[i] += char
    })
  })

  const result = Object.keys(dict).map(function (key) {
    return dict[key].leastFrequentCharacter()
  }).join('')

  console.log(result)
}

String.prototype.leastFrequentCharacter = function () { // eslint-disable-line
  const string = this
  let leastFrequentCharacter = ''
  let leastUsedCharacterCount = 0

  string.split('').forEach(function (character) {
    if (character !== leastFrequentCharacter) {
      let characterOccurrences = 0
      for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
          characterOccurrences++
        }
      }
      if (!leastUsedCharacterCount || characterOccurrences < leastUsedCharacterCount) {
        leastUsedCharacterCount = characterOccurrences
        leastFrequentCharacter = character
      }
    }
  })

  return leastFrequentCharacter
}
