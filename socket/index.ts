import { Server } from "socket.io"
export const webSocketServer = {
    name : "webSocketServer",
    configureServer(server){
        const io = new Server(server.httpServer)

        io.on('connection', (socket) => {
            socket.emit('on-msg', "Hello From Server..")
        })
    }
}
