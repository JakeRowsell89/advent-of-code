// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

const grid = [
  '123',
  '456',
  '789'
]

// function init (e, input) {
//   const instructions = input.split('\n')
//   return run(instructions)
// }

module.exports = function (input) {
  const instructions = input.split('\n')
  return run(instructions)
}

function run (instructions) {
  let position = {
    rowIndex: 1,
    colIndex: 1
  }
  let endKeys = []

  instructions.forEach((series) => {
    position = moveToEndKey(series, grid, position)
    endKeys.push(grid[position.rowIndex][position.colIndex])
  })
  // console.log(endKeys.join(''))
  return endKeys.join('')
}

function moveToEndKey (series, grid, startingPosition) {
  let rowIndex = startingPosition.rowIndex
  let colIndex = startingPosition.colIndex

  for (let i = 0; i < series.length; i++) {
    const move = series[i]
    if (/L|U/.test(move)) {
      if (move === 'L' && grid[rowIndex][colIndex - 1]) {
        colIndex--
      } else if (move === 'U' && grid[rowIndex - 1] && grid[rowIndex - 1][colIndex]) {
        rowIndex--
      }
    } else {
      if (move === 'R' && grid[rowIndex][colIndex + 1]) {
        colIndex++
      } else if (move === 'D' && grid[rowIndex + 1] && grid[rowIndex + 1][colIndex]) {
        rowIndex++
      }
    }
  }

  return {
    rowIndex: rowIndex,
    colIndex: colIndex
  }
}
