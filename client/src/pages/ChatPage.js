import React, { useEffect, useRef, useState } from 'react'
 import  {io}  from 'socket.io-client'

 const socket =io.connect('http://localhost:5000')


const ChatPage = () => {
    const [message,setMessage]=useState([])
    const [messageReseve,setMessageReseve]=useState([])
    const refMessage=useRef('')

    useEffect(()=>{
         socket.on('chat_message',(msg)=>{
             setMessageReseve(Prevmsg=>[...Prevmsg,msg])
             })

    },[messageReseve])

    const sendMessage=()=>{
        console.log(refMessage.current.value)
        setMessage(prevMesg=>[...prevMesg,refMessage.current.value])
         refMessage.current.value=''
        console.log(message)
        socket.emit('chat_message',message)
        
    }
    let myMessage
    message.length ?  
                    myMessage=message.map((msg,index)=><div key={index} className='flex justify-end bg-slate-400 m-2'><span className=''>{msg}</span></div>):
                    myMessage=<div>start Chate</div>
    
  return (
    <div className='w-9/12 border h-[500px] mx-auto my-4 relative'>
        <div className=''>
                {messageReseve}
                {myMessage}
        </div>
        <div className='absolute bottom-0 w-full'>
        <input 
                className='w-[80%] border'
                type='text'
                placeholder='Message' 
                ref={refMessage}/>
        <button className='w-[20%] border' onClick={()=>sendMessage()}>Send</button>
                </div>
    </div>
  )
}

export default ChatPage