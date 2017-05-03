var http = require('http')

http.get(process.argv[2], function(request){
    request.setEncoding('utf8')
    result = ''
    request.on('data', function(data) {
        result += data
    })
    request.on('end', function() {
        console.log(result.length)
        console.log(result)
    })

})
