import React from 'react'
import {Link} from 'react-router-dom'

const Rooms = ({room,deleteRoom}) => {
  return (
    <div className='shadow-lg flex justify-around m-8'>
      <h1>{room.roomName}</h1>
      <div className='flex justify-items-center '>
        <div className='mx-2'>
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