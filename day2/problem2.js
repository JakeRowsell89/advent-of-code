// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)
const moveResults = {
  '1': { 'D': '3' },
  '2': { 'D': '6', 'R': '3' },
  '3': { 'U': '1', 'D': '7', 'L': '2', 'R': '4' },
  '4': { 'D': '8', 'L': '3' },
  '5': { 'R': '6' },
  '6': { 'U': '2', 'D': 'A', 'L': '5', 'R': '7' },
  '7': { 'U': '3', 'D': 'B', 'L': '6', 'R': '8' },
  '8': { 'U': '4', 'D': 'C', 'L': '7', 'R': '9' },
  '9': { 'L': '8' },
  'A': { 'U': '6', 'R': 'B' },
  'B': { 'U': '7', 'D': 'D', 'L': 'A', 'R': 'C' },
  'C': { 'U': '8', 'L': 'B' },
  'D': { 'U': 'B' }
}

// function init (e, input) {
//   const instructions = input.trim().split('\n')
//   return run(instructions)
// }

module.exports = function (input) {
  const instructions = input.split('\n')
  return run(instructions)
}

function run (instructions) {
  let position = '5'
  let endKeys = []

  instructions.forEach((series) => {
    position = moveToEndKey(series, position)
    endKeys.push(position)
  })

  return endKeys.join('')
}

function moveToEndKey (series, startingPosition) {
  let position = startingPosition

  for (let i = 0; i < series.length; i++) {
    const move = series[i]
    if (moveResults[position][move]) {
      position = moveResults[position][move]
    }
  }

  return position
}
