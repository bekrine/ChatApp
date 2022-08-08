import React from 'react'
import {Link} from 'react-router-dom'
import {io} from 'socket.io-client'
const socket=io()

const Rooms = ({room,deleteRoom}) => {

const joinRoom=()=>{
  socket.emit('join_room',room)
}

  return (
    <div className='shadow-lg flex justify-around m-8'>
      <h1>{room.roomName}</h1>
      <div className='flex justify-items-center '>
        <div className='mx-2' onClick={()=>joinRoom()}>
      <Link to='/chatpage'>JOIN ROOM</Link>
        </div>
        <div className='mx-2 text-red-600'>
      <button onClick={()=>deleteRoom(room.id)}>Delete room</button>
        </div>
      </div>
    </div>
  )
}

export default Rooms