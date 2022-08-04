import React, { useEffect, useState } from 'react'
// import  {io}  from 'socket.io-client'

// const socket =io.connect('http://localhost:5000')


const ChatPage = () => {
    const [message,setMessage]=useState('')
    const [messageReseve,setMessageReseve]=useState('')

    useEffect(()=>{
        // socket.on('chat_message',(msg)=>{
        //     setMessageReseve(msg)
        // })

    },[messageReseve])

    const sendMessage=()=>{
        // socket.emit('chat_message',message)
        // setMessage('')
    }

  return (
    <div className='w-9/12 border h-[500px] mx-auto my-4 relative'>
        <div>
                {messageReseve}
        </div>
        <div className='absolute bottom-0 w-full'>
        <input 
                className='w-[80%] border'
                type='text'
                placeholder='Message'
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}/>
        <button className='w-[20%] border' onClick={()=>sendMessage()}>Send</button>
                </div>
    </div>
  )
}

export default ChatPage