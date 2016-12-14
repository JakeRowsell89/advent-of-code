// let grid = ('.'.repeat(50) + '\n').repeat(6).trim()
// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

let grid = ('.'.repeat(7) + '\n').repeat(3).trim()
module.exports = function (input) {
  return init(null, input)
}

function init (e, input) {
  const rows = input.trim().split('\n')
  rows.forEach(command => {
    updateGrid(command, grid)
  })
  console.log(grid.characterCount('#'))
  console.log(grid)
  return grid.characterCount('#')
}

function updateGrid (command) {
  if (/^rect/i.test(command)) {
    const widthAndHeight = command.replace('rect ', '').split('x')
    drawRectangleOnGrid(parseInt(widthAndHeight[0], 10), parseInt(widthAndHeight[1], 10), 0, 0)
  } else {
    const chunks = command.split(' ')
    rotateGrid(chunks[2], parseInt(chunks[4], 10))
  }
}

function rotateGrid (directions, amount) {
  const chunks = directions.split('=')

  if (chunks[0] === 'y') {
    rotateHorizontal(parseInt(chunks[1], 10), amount)
  } else {
    rotateVertical(parseInt(chunks[1], 10), amount)
  }
}

function rotateHorizontal (row, amount) {
  const ar = grid.split('\n')
  amount = amount % ar[0].length

  if (amount) {
    ar[0] = ar[0].marqueeEffect(amount)
  }
  grid = ar.join('\n')
}

function rotateVertical (column, amount) {
  const ar = grid.split('\n')
  amount = amount % ar.length

  if (amount) {
    let shiftedString = ar.map(function (str) {
      return str[column]
    }).join('').marqueeEffect(amount)
    grid = ar.map(function (str, index) {
      return str.replaceAt(column, shiftedString[index])
    }).join('\n')
  }
}

function drawRectangleOnGrid (width, height, startX, startY) {
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      setGridValue(startX + j, startY + i)
    }
  }
}

function setGridValue (X, Y) {
  let ar = grid.split('\n')
  ar[Y] = ar[Y].replaceAt(X, '#')
  grid = ar.join('\n')
}

String.prototype.characterCount = function (character) { // eslint-disable-line
  const re = new RegExp(character, 'g')
  return this.length - this.replace(re, '').length
}

String.prototype.replaceAt = function (index, replacement) { // eslint-disable-line
  let head = this.slice(0, 0)
  let tail = this.slice(index + 1)
  return head.concat(replacement, tail)
}

String.prototype.marqueeEffect = function (amount) { // eslint-disable-line
  let ar = this.split('')
  for (var i = 0; i < amount; i++) {
    let last = ar.pop()
    ar = [last].concat(ar)
  }
  return ar.join('')
}
