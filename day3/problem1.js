// --- Day 3: Squares With Three Sides ---
//
// Now that you can think clearly, you move deeper into the labyrinth of hallways and office furniture that makes up this part of Easter Bunny HQ. This must be a graphic design department; the walls are covered in specifications for triangles.
//
// Or are they?
//
// The design document gives the side lengths of each triangle it describes, but... 5 10 25? Some of these aren't triangles. You can't help but mark the impossible ones.
//
// In a valid triangle, the sum of any two sides must be larger than the remaining side. For example, the "triangle" given above is impossible, because 5 + 10 is not larger than 25.
//
// In your puzzle input, how many of the listed triangles are possible?
// const fs = require('fs')
// fs.readFile('./input.txt', 'utf-8', init)

function init (e, input) {
  const rows = input.split('\n')
  let validTriangles = rows.reduce(function (validTriangles, sides) {
    return sides !== '\n' && isValidTriangle(sides) ? validTriangles + 1 : validTriangles
  }, 0)

  console.log(validTriangles)
  return validTriangles
}

module.exports = init

function isValidTriangle (row) {
  const input = row.trim().replace(/\s+/g, '|').split('|')
  const a = parseInt(input[0], 10)
  const b = parseInt(input[1], 10)
  const c = parseInt(input[2], 10)
  // abc
  // acb
  // bca
  return ABToMoreThanC(a, b, c) && ABToMoreThanC(a, c, b) && ABToMoreThanC(b, c, a)
}

function ABToMoreThanC (a, b, c) {
  return (a + b) > c
}
