
var mod = require('./ex06a');

var fs = require('fs')
mod(process.argv[2], process.argv[3], function callback(err, fileList){
	for (let i = 0; i < fileList.length; i++){
	    if (fileList[i].endsWith('.' + process.argv[3])){
            console.log(fileList[i])
        }
    }
})
