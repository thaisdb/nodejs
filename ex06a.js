
module.exports =  function (dir, ext, callback){
    var fs = require('fs')
	fs.readdir(dir, function(err, fileList){
        if (err){
            return callback(err, null)
        }
        files = []
        for (i = 0; i < fileList.length; i++){
            if (fileList[i].endsWith('.' + ext)){
                files.push(fileList[i])
            }
       }
       return callback(null, files)
    })
}
