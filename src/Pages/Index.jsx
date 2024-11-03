import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const index = () => {
     const [roomCode, setRoomCode] = useState("");
     const navigate = useNavigate();
     const handle = (e) => {
          setRoomCode(e.target.value);
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          navigate(`/room/${roomCode}`)
     }


     return (
          <div className='home-page'>
               <h2>Hii Please Join the Meeting</h2>
               <form className='form' onSubmit={handleSubmit}>
                    <div className='int-continer'>
                         <label>Enter Room Code</label>
                         <input type="text" value={roomCode} onChange={handle} placeholder='Enter Room Code' required className='int' />
                    </div>
                    <button type='submit' className='btn'>Enter Room</button>
               </form>
          </div>
     )
}

export default index
