import React from 'react'
import Fade  from 'react-reveal/Fade';

export default function ReturContent() {
  return (
    <>
    <div className='text-center pt-3 text-global-color'>
      <h4>Voucher</h4>
    </div>
    <Fade top>
        <div className='d-flex justify-content-center align-items-center p-2'>
            <img src="image/voucer.svg" className='img-fluid w-50 h-25 ' alt="" /> 
        </div>

    </Fade>
    <Fade right>
        <div className=' p-2'>
            <h5 className='text-global-color bold text-center mb-5'>Anda Tidak Memiliki Voucher</h5>
        </div>

    </Fade>
    
    </>
  )
}
