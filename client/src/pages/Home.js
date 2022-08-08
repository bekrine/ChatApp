import React, { useState,useRef } from 'react'
import {v4 as uuId} from 'uuid'
import Rooms from '../components/Rooms'
 import { io } from 'socket.io-client'

const Home = () => {
  const socket=io()
  const nameRef=useRef()
  const [roomName,setRoomName]=useState([])

  const createRoom=()=>{
    setRoomName(prevNames=> {
      return [...prevNames,{id:uuId(),roomName:nameRef.current.value}]
    })
    nameRef.current.value=''
   socket.emit('create',roomName)
  }
  const deleteRoom=(id)=>{
    const newRooms=roomName.filter(room=>room.id !== id)
    setRoomName(newRooms)
  }
  return (
    <>
    <div className='m-6 flex flex-row justify-around '>
      <h1 className=''>Create Romm</h1>
      <div className='ml-4'>
      <input
            className=' shadow-xl bg-transparent w-full'
             type='text' 
             placeholder='Room name' 
             ref={nameRef} />
               <button 
      className='bg-indigo-500	'
         onClick={()=>createRoom()} >Create Room</button>
             
      
      </div>
    </div>
    {
      roomName?.length ?
      roomName.map((room,index)=><Rooms room={room} key={index} deleteRoom={deleteRoom} />):
      <div className='absolute left-[30%]'>No room exicte You can create a room </div>
    }
    
    </>
  )
}

export default Home