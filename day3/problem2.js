const fs = require('fs')
fs.readFile('./input.txt', 'utf-8', init)

function init (e, input) {
  const rows = input.trim().split('\n')
  const collumns = rows.reduce(function (obj, row) {
    const input = row.trim().replace(/\s+/g, '|').split('|')
    obj.col1.push(parseInt(input[0], 10))
    obj.col2.push(parseInt(input[1], 10))
    obj.col3.push(parseInt(input[2], 10))
    return obj
  }, { col1: [], col2: [], col3: [] })
  const orderedInputs = [].concat(collumns.col1, collumns.col2, collumns.col3)
  let total = 0

  for (var i = 0; i < orderedInputs.length; i += 3) {
    if (isValidTriangle([orderedInputs[i], orderedInputs[i + 1], orderedInputs[i + 2]].join(' '))) {
      total++
    }
  }

  return total
}

function isValidTriangle (row) {
  const input = row.trim().replace(/\s+/g, '|').split('|')
  const a = parseInt(input[0], 10)
  const b = parseInt(input[1], 10)
  const c = parseInt(input[2], 10)

  return ABToMoreThanC(a, b, c) && ABToMoreThanC(a, c, b) && ABToMoreThanC(b, c, a)
}

function ABToMoreThanC (a, b, c) {
  return (a + b) > c
}
