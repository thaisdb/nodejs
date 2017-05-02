

var fs = require('fs')
let content = fs.readFileSync(process.argv[2])
content = content.toString()
content = content.split('\n')
console.log(content.length - 1)
