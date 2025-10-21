import { WebSocketServer } from "ws";
import {client} from '@repo/db/client'

const server = new WebSocketServer({
    port:3001
});

server.on("connection" ,async(socket)=>{
    await client.users.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    socket.send("hi there")
})



