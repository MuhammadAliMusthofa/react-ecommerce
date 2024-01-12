import React from 'react';
import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import Footer from "../components/Footer";
// import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import { Form, Button } from 'react-bootstrap';
import { Container, Form, Button } from 'react-bootstrap';
import Zoom  from 'react-reveal/Zoom';




export default function payment() {
    const [paymentMethod, setPaymentMethod] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    bankName: '',
    expirationDate: '',
  });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan metode pembayaran yang dipilih (COD atau transfer bank)
    console.log('Metode Pembayaran: ', paymentMethod);
    if (paymentMethod === 'bankTransfer') {
      console.log('Detail Transfer Bank: ', bankDetails);
      // Tambahkan logika untuk proses pembayaran transfer bank
    }
  };

  //RADIOBUTTON
  const [selectedOption, setSelectedOption] = useState('red');

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };
    
  return (
    <>
    <NavbarCompo/>

    <section className='mt-5 mb-5'>
        <div className="container pe-5 ps-5">
            <div className="col-md-12 ">
              <Zoom clear>

                <div className="checkout shadow rounded text-global-color">
                    <div className="checkout-header  " style={{backgroundColor:'#432818', color:'#ffff'}}>
                        <div className=" text-center">
                            <h5>Pembayaran</h5>
                        </div>
                    </div>
                    <div className="checkout-body ">
                      <div className='col-md-8 mx-auto'>

                      <Container className='mt-5'>
      
                        <Form onSubmit={handlePaymentSubmit}>
                            <Form.Group className='mb-1'>
                            <Form.Label>Masukkan Kupon (optional):</Form.Label>
                            <Form.Control 
                            type='text'>
                                
                            </Form.Control>
                            </Form.Group>

                            <Form.Group className='mb-1'>
                            <Form.Label>Pilih Kurir:</Form.Label>
                                <div className='d-flex flex-column'>

                                <div className='d-flex justify-content-between align-items-center p-3 border w-50 rounded mb-2'>
                                        <input type="radio" name="color" value="jnt" checked={selectedOption === 'jnt'} onChange={handleOptionChange} />    
                                        <img src="image/logo-jnt.png" alt="ini kurir"  className='img-fluid ' style={{width:'80px', height:'40px'}}/>    
                                        <p>Rp.4000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-3 border w-50 rounded mb-2'>
                                        <input type="radio" name="color" value="jne" checked={selectedOption === 'jne'} onChange={handleOptionChange} />    
                                        <img src="image/logo-jne.png" alt="ini kurir"  className='img-fluid ' style={{width:'80px', height:'40px'}}/>    
                                        <p>Rp.5000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center p-3 border w-50 rounded mb-2'>
                                        <input type="radio" name="color" value="sicepat" checked={selectedOption === 'sicepat'} onChange={handleOptionChange} />    
                                        <img src="image/logo-sicepat.png" alt="ini kurir"  className='img-fluid ' style={{width:'80px', height:'40px'}}/>    
                                        <p>Rp.6000</p>
                                </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="paymentMethod">
                            <Form.Label>Pilih Metode Pembayaran:</Form.Label>
                            <Form.Control as="select" onChange={handlePaymentChange} value={paymentMethod} >
                                
                                <option value="" placeholder='pilih metode pembayaran'></option>
                                <option value="COD">Cash on Delivery (COD)</option>
                                <option value="bankTransfer">Transfer Bank</option>
                            </Form.Control>
                            </Form.Group>

                            {paymentMethod === 'bank Transfer' && (
                            <div>
                                <Form.Group controlId="accountNumber">
                                <Form.Label>Nomor Rekening Bank:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nomor Rekening Bank"
                                    name="accountNumber"
                                    onChange={handleBankDetailsChange}
                                    value={bankDetails.accountNumber}
                                />
                                </Form.Group>

                                <Form.Group controlId="bankName">
                                <Form.Label>Nama Bank:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nama Bank"
                                    name="bankName"
                                    onChange={handleBankDetailsChange}
                                    value={bankDetails.bankName}
                                />
                                </Form.Group>

                                <Form.Group controlId="expirationDate">
                                <Form.Label>Tanggal Kadaluwarsa:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="MM/YYYY"
                                    name="expirationDate"
                                    onChange={handleBankDetailsChange}
                                    value={bankDetails.expirationDate}
                                />
                                </Form.Group>
                            </div>
                            )}

                            
                        </Form>
                    </Container>
                      </div>
                        
                    </div>
                    <div className="checkout-footer ">

                        <Link to='/order-detail' className='text-decoration-none'>
                        <div className='d-flex justify-content-end mt-3 pb-3 pe-3'>
                                <button className='btn-global2'>Proses & Bayar
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





    