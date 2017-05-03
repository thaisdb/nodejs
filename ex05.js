

var fs = require('fs')
fs.readdir(process.argv[2], function callback(err, fileList){
	if (err){
		return console.log(err)
	}
	for (let i = 0; i < fileList.length; i++){
	    if (fileList[i].endsWith('.' + process.argv[3])){
            console.log(fileList[i])
        }
    }
})
