import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function TransaksiDikirim() {
  return (
    <>
    <div className='p-5 border'>
      <div className='head-content d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faStore}/>
            <h5 className='ms-2 mt-2'>Hawariyyun Store</h5>
        </div>
        <div>
          <h6 className='text-warning'>Dikirim</h6>
        </div>
      </div>
      <div className='isi-content d-flex justify-content-between border-bottom pb-2'>
        <div className='d-flex justify-content-start border p-2' style={{width:'100px', height:'100px'}}>
          <img className='img-fluid' src="image/coffee/kopigulaaren.png" alt=""  />
        </div>
        <div className='d-flex justify-content-center flex-column'>
          <h6>Coffee - Kopi Susu Gula Aren (Regular)</h6>
          <h6 className='text-end fs-13'>1x</h6>
          <h6 className='text-end fs-13'>Rp.20.000</h6>
        </div>
      </div>
       <div className='footer-content d-flex justify-content-between align-items-center border-bottom pt-2 pb-2 mt-2 mb-2'>
          <h6 className='fs-13' style={{color:'gray'}}>1 produk</h6>
          <h6 className='text-end'><span style={{color:'gray'}}>Total Pesanan:</span> <span style={{color:'crimson'}}>Rp.20.000</span></h6>
      </div>

      <div className='footer-content d-flex justify-content-end '>
          <Link to=''>
            <button className='btn-global2' style={{width:'200px'}}>Beli lagi</button>
          </Link>
      </div>
      
    </div> 
    <div className='p-5 border'>
      <div className='head-content d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faStore}/>
            <h5 className='ms-2 mt-2'>Katarasa</h5>
        </div>
        <div>
          <h6 className='text-warning'>Dikirim</h6>
        </div>
      </div>
      <div className='isi-content d-flex justify-content-between border-bottom pb-2'>
        <div className='d-flex justify-content-start border p-2' style={{width:'100px', height:'100px'}}>
          <img className='img-fluid' src="image/coffeee.png" alt=""  />
        </div>
        <div className='d-flex justify-content-center flex-column'>
          <h6>Coffee - Latte  (Large)</h6>
          <h6 className='text-end fs-13'>1x</h6>
          <h6 className='text-end fs-13'>Rp.25.000</h6>
        </div>
      </div>
       <div className='footer-content d-flex justify-content-between align-items-center border-bottom pt-2 pb-2 mt-2 mb-2'>
          <h6 className='fs-13' style={{color:'gray'}}>1 produk</h6>
          <h6 className='text-end'><span style={{color:'gray'}}>Total Pesanan:</span> <span style={{color:'crimson'}}>Rp.25.000</span></h6>
      </div>

      <div className='footer-content d-flex justify-content-end '>
          <Link to=''>
            <button className='btn-global2' style={{width:'200px'}}>Beli lagi</button>
          </Link>
      </div>
      
    </div> 
    </>

    
  )
}
