

var fs = require('fs')
fs.readFile(process.argv[2],
function callback(err, data){
	if (err){
		return console.log(err)
	}
	let content = data.toString().split('\n')
	console.log(content.length - 1)
})
