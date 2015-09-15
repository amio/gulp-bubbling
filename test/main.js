const tape = require('tape')
const path = require('path')

const pkg = require('../package.json')
const main = path.join(__dirname, '../', pkg.main)

tape.test('index', function (t) {
  //
  console.log(main)
  t.end()
})
