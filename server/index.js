const express=require('express')
const app=express()
const http=require('http')
const server=http.createServer(app)
const {Server}=require('socket.io')
const io= new Server(server,{
    cors:{
        origin:'http://localhost:3000'
    }
})



app.get('/',(req,res)=>{
    res.send('hello')
})

io.on("connection",(socket)=>{
    console.log('user conected');
    socket.on('join_room',(room)=>{
        console.log(`you joind room ${room}`)
        socket.join(room)
    })
    socket.on('chat_message',(msg)=>{
       io.emit('chat_message',msg)
    })
    socket.on('disconnect',()=>{
        console.log('user has disconnect')
    })
})


server.listen(5000,()=>{
    console.log('listen to port 5000')
})