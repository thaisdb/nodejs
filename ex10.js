net = require('net')

function zeroFilled (n) {
    return n < 10 ? '0' + n : n
}

server = net.createServer(function(socket){
    d = new Date();
    socket.end(d.getFullYear() + '-'
                + zeroFilled(d.getMonth() + 1) + '-'
                + zeroFilled(d.getDate()) + ' '
                + zeroFilled(d.getHours()) + ':'
                + zeroFilled(d.getMinutes()) + '\n')                
})
server.listen(process.argv[2])
