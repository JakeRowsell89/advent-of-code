// the-rooms-name-encrypted - sectorID [checksum]
// checksum is the five most common letters in the encrypted name, in order, with ties broken by alphabetization

// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)
module.exports = init

function init (e, input) {
  const rows = input.trim().split('\n')
  const realRooms = rows.filter(isRealRoom)
  const realRoomsDecoded = realRooms.map(decodeRoomName)
  const foundRealRoom = realRoomsDecoded.filter(nameMatchesQuery)
  // console.log(realRoomsDecoded)
  // const sectorIdTotals = realRooms.reduce(function (idTotals, room) {
  //   return idTotals + getSectorIdNumber(room)
  // }, 0)
  // console.log(sectorIdTotals)

  // console.log(foundRealRoom)
  const result = foundRealRoom.length ? parseInt(foundRealRoom[0].split('|')[1], 10) : null
  return result
}

function nameMatchesQuery (name) {
  return /NorthPole/i.test(name.split('|')[0])
}

function decodeRoomName (room) {
  const encryptedName = room.split('-')
  encryptedName.pop()
  const shift = getSectorIdNumber(room)

  return decryptName(encryptedName, shift) + '|' + shift
}

function decryptName (input, amount) {
  return input.join('-').split('').reduce(function (result, character) {
    const shifted = character === '-' ? ' ' : shiftCharacter(character, amount)
    return result + shifted
  }, '')
}

function shiftCharacter (character, amount) {
  const charCode = character.charCodeAt(character)
  const newCharCode = ((charCode - 97 + amount) % 26) + 97
  return String.fromCharCode(newCharCode)
}

function getSectorIdNumber (room) {
  const idAndChecksum = room.split('-').pop()
  const sectorIds = /[0-9]+/.exec(idAndChecksum)
  return parseInt(sectorIds, 10)
}

function isRealRoom (code) {
  const chunks = code.split('-')
  const checksumAndSectorId = chunks.pop()
  const string = chunks.join('').split('').sort().join('')
  return checksumIsValid(string, checksumAndSectorId.replace(/[0-9]+\[|]/g, ''))
}

function checksumIsValid (string, checksum) {
  const expectedChecksum = generateChecksum(string)
  return checksum.length === 5 && checksum === expectedChecksum
}

function generateChecksum (string) {
  // get most ocurring character
  let checksum = ''
  while (checksum.length < 5 && string.length) {
    const character = string.mostFrequentCharacter()
    checksum += character
    string = string.replaceAll(character, '')
  }

  return checksum
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

String.prototype.replaceAll = function(search, replacement) { // eslint-disable-line
  let target = this
  return target.split(search).join(replacement)
}
