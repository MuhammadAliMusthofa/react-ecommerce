import React from 'react';
import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import Footer from "../components/Footer";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Zoom } from 'react-reveal';


export default function alamat() {
    
  return (
    <>
    <NavbarCompo/>

    <section className='mt-5 mb-5'>
        <div className="container pe-5 ps-5">
            <div className="col-md-12  ">
            <Zoom clear>
                        
                <div className="checkout shadow rounded text-global-color">
                    <div className="checkout-header  " style={{backgroundColor:'#432818', color:'#ffff'}}>
                        <div className=" text-center">
                            <h5>Alamat Kirim</h5>
                        </div>
                    </div>
                    <div className="checkout-body ">
                      <div className='col-md-8 mx-auto'>

                      <form className="needs-validation p-3" noValidate>
                          <h5 className="text-start mb-2">Billing Information</h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start">Lorem Ipsum has been the industry's standard dummy text ever since</p>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="firstName">First name</label>
                              <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                              <div className="invalid-feedback">Valid first name is required.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="lastName">Last name</label>
                              <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                              <div className="invalid-feedback">Valid last name is required.</div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="1234 Main St" required ></textarea>
                            {/* <input type="text-area" className="form-control" id="address" placeholder="1234 Main St" required /> */}
                            <div className="invalid-feedback">Please enter your shipping address.</div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <textarea  type="text-area" className="form-control" rows="3" id="address2" placeholder="Apartment or suite"></textarea>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" className="form-control" id="mobile" />
                          </div>
                          <div className="row">
                
                            <div className="col-md-4 mb-3">
                              <label className="form-label">Provinsi</label>
                              <select name="state" className="form-control select2-no-search" data-bs-placeholder="Select State">
                                <option value="br">Jawa Barat</option>
                                <option value="cz">Jawa Timur</option>
                                <option value="de">kalimantan Timur </option>
                                <option value="pl" selected>Jakarta Timur</option>
                              </select>
                              <div className="invalid-feedback">Please provide a valid state.</div>
                            </div>
                            <div className="col-md-3 mb-3 mt-2">
                              <label htmlFor="zip">Kode Pos</label>
                              <input type="text" className="form-control" id="zip" placeholder="" required />
                              <div className="invalid-feedback">Zip code required.</div>
                            </div>
                          </div>
        
                          
                      </form>
                      </div>
                        
                    </div>
                    <div className="checkout-footer ">

                        <Link to='/order-detail' className='text-decoration-none'>
                        <div className='d-flex justify-content-end mt-3 pb-3 pe-3'>
                                <button className='btn-checkout-cart'>Lanjut Checkout
                                <FontAwesomeIcon icon={faArrowRightFromBracket} className='ms-2' />
                                </button> 
                        </div>
                        </Link>
                    </div>
                </div>
            </Zoom>
            </div>
        </div>
    </section>

    <div className="footer p-2">
          <Footer/>
    </div>
    </>

  )
}




    