const fs = require('fs')
fs.readFile('./input.txt', 'utf-8', init)

function init (e, data) {
  const moves = data.split(', ')
  let orientation = 'north'
  let coordinates = {
    x: 0,
    y: 0
  }

  moves.forEach((move) => {
    const rotation = move.slice(0, 1)
    const steps = parseInt(move.slice(1), 10)
    orientation = getNewOrientation(orientation, rotation)

    updateCoordinates(coordinates, orientation, steps)
  })

  console.log(Math.abs(coordinates.x) + Math.abs(coordinates.y))
}

function getNewOrientation (current, direction) {
  const orientations = ['north', 'east', 'south', 'west']
  const index = orientations.indexOf(current)
  let newIndex

  if (direction === 'L') {
    newIndex = index > 0 ? index - 1 : orientations.length - 1
  } else {
    newIndex = index === orientations.length - 1 ? 0 : index + 1
  }

  return orientations[newIndex]
}

function updateCoordinates (coordinates, orientation, steps) {
  const axis = /north|south/.test(orientation) ? 'y' : 'x'
  const stepsInDirection = /west|south/.test(orientation) ? 0 - steps : steps

  coordinates[axis] += stepsInDirection
}
