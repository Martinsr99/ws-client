import { Manager, Socket } from "socket.io-client"


export const connectToServer = () => {

    const manager = new Manager('http://localhost:3001/socket.io/socket.io.js')

    const socket = manager.socket('/')

    addListerners(socket)
}

const addListerners = (socket: Socket) => {

    const serverStatusLabel = document.querySelector('#server-status')

    socket.on('connect', () => {
        serverStatusLabel.innerHTML = 'connected'
    })
    
    socket.on('disconnect', () => {
        serverStatusLabel.innerHTML = 'disconnected'
        
    })
}