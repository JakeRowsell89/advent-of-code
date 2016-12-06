const md5 = require('md5')

// module.exports = init
init('reyedfim')

function init (input) {
  let index = 0
  let pwd = ''
  let encoded
  let hash
  while (pwd.length !== 8) {
    hash = input + index
    encoded = md5(hash)

    if (encoded.slice(0, 5) === '00000') {
      pwd += encoded.charAt(5)
    }
    index++
  }
  console.log(pwd)
  return pwd
}

// function hexEncode (str) {
//   var hex
//
//   var result = ''
//   for (let i = 0; i < str.length; i++) {
//     hex = str.charCodeAt(i).toString(16)
//     result += ('000' + hex).slice(-4)
//   }
//   return result
// }
//
// function hexDecode (str) {
//     var j
//     var hexes = str.match(/.{1,4}/g) || []
//     var back = ''
//     for(j = 0; j<hexes.length; j++) {
//         back += String.fromCharCode(parseInt(hexes[j], 16))
//     }
//
//     return back
// }
