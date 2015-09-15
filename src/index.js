import 'core-js/shim'

const gutil = require('gulp-util')
const through = require('through2')

export default function (opt) {
  gutil.log()
  return through.obj(() => {
    //
  })
}
