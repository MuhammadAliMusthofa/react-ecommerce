import React from 'react'
import Fade  from 'react-reveal/Fade';

export default function Event() {
  return (
    <>
    <div className='text-center pt-3 text-global-color'>
      <h4>Event</h4>
    </div>
    <Fade bottom>
        <div className='d-flex justify-content-center align-items-center flex-column '>
            <img src="image/event.svg" className='img-fluid w-50 h-25 ' alt="" /> 
            <p style={{fontSize:'20px'}} className='text-global-color bold text-center mb-5'>Event Belum Tersedia</p>

        </div>

    </Fade>
   
    
    </>
  )
}
