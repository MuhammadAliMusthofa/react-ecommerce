import React from 'react'
import NavbarCompo from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

export default function Checkout() {
  return (
    <>
    <NavbarCompo className='mb-5'/>
    <div className='container mt-5 mb-5'>
      <h4>Checkout</h4>
      <div className="row">
        <div className="col-md-12 ">
            <div className="col-md-6 mx-auto p-2 card ">
                <h5>Pesanan Kamu</h5>
                

                    <div className='d-flex  mb-2 align-items-center justify-content-around mb-3 p-2 border-bottom' style={{backgroundColor:'#DEB887'}}>
                        <img src="image/coffee.jpg" style={{width:'100px', height:'100px'}} alt="" className='rounded'/>
                        
                        <h6>Cappucino  </h6>
                        <div className="d-flex flex-wrap  mt-2">
                            <div className="mt-2 product-title tx-12">Jumlah:</div>
                            <div className="handle-counter ms-2" id="handleCounter1">
                                <button className="counter-minus btn btn-outline-light border"><FontAwesomeIcon icon={faMinus} /></button>
                                <Form.Control
                                placeholder="2"
                                type="text"
                                />
                                <button className="counter-plus btn btn-outline-light border"><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </div>
                        <h6>Rp.35k</h6>
                    </div>
                    <div className='d-flex  mb-2 align-items-center justify-content-around mb-3 p-2 border-bottom' style={{backgroundColor:'#DEB887'}}>
                        <img src="image/coffee2.jpg" style={{width:'100px', height:'100px'}} alt="" className='rounded'/>
                        
                        <h6> Red Velvet</h6>
                        <div className="d-flex flex-wrap  mt-2">
                            <div className="mt-2 product-title tx-12">Jumlah:</div>
                            <div className="handle-counter ms-2" id="handleCounter1">
                                <button className="counter-minus btn btn-outline-light border"><FontAwesomeIcon icon={faMinus} /></button>
                                <Form.Control
                                placeholder="2"
                                type="text"
                                />
                                <button className="counter-plus btn btn-outline-light border"><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </div>
                        <h6>Rp.35k</h6>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <h6>Subtotal</h6>
                        <h5>Rp.140k</h5>
                        
                    </div>
               
               
                <button className='btn btn-primary'>Proses</button>
            </div>
        </div>
      </div>
    </div>
    <div className="footer p-2">
          <Footer/>
    </div>
    </>
  )
}
