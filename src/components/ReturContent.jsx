import React from 'react'
import Fade  from 'react-reveal/Fade';

export default function ReturContent() {
  return (
    <>
        <div className='text-center pt-3 text-global-color'>
            <h4>Pengembalian Barang</h4>
        </div>
    <Fade top>
        <div className='d-flex justify-content-center align-items-center pb-3 pt-3'>
            <img src="image/retur.jpeg" className='img-fluid w-50 h-25 ' alt="" /> 
        </div>

    </Fade>
    <Fade right>
        <div className=' p-5'>
            <h5  className='text-global-color bold text-center mb-5'>Transaksi Belum ada</h5>
        </div>

    </Fade>
    
    </>
  )
}
