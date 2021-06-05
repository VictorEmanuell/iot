const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: process.env.PORT })

console.log('Ok')

wss.on('connection', (ws) => {
    ws.on('message', message => {
        console.log(message)
        wss.clients.forEach(client => client.send(message))
    })
})