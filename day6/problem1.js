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
    return dict[key].mostFrequentCharacter()
  }).join('')

  console.log(result)
}

String.prototype.mostFrequentCharacter = function () { // eslint-disable-line
  const string = this
  let mostFrequentCharacter = ''
  let mostUsedCharacterCount = 0

  string.split('').forEach(function (character) {
    if (character !== mostFrequentCharacter) {
      let characterOccurrences = 0
      for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
          characterOccurrences++
        }
      }
      if (characterOccurrences > mostUsedCharacterCount) {
        mostUsedCharacterCount = characterOccurrences
        mostFrequentCharacter = character
      }
    }
  })

  return mostFrequentCharacter
}
