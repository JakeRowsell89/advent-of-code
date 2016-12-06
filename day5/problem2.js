const md5 = require('md5')

String.prototype.replaceAt = function (index, character) { // eslint-disable-line
  return this.substr(0, index) + character + this.substr(index + character.length)
}

// module.exports = init

init('reyedfim')

function init (input) {
  let index = 1017991
  let pwd = '________'
  let encoded
  let hash
  while (pwd.indexOf('_') > -1) {
    hash = input + index
    encoded = md5(hash)

    if (encoded.slice(0, 5) === '00000') {
      let pos = parseInt(encoded.charAt(5), 10)
      console.log('Attempting: ' + encoded)
      if (pos <= pwd.length - 1 && pwd.charAt(pos) === '_') {
        pwd = pwd.replaceAt(pos, encoded.charAt(6))
        console.log('Password: ' + pwd)
      }
    }
    index++
  }
  // console.log(pwd)
  return pwd
}
