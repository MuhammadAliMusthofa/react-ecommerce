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


export default function cart() {
    const [count, setCount] = useState(1);

  // Fungsi untuk menambahkan 1 ke nilai counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangkan 1 dari nilai counter
  const decrementCounter = () => {
    setCount(count - 1);
  };

  const [activeOption, setActiveOption] = useState(1);

  const handleOptionClick = (optionNumber) => {
      setActiveOption(optionNumber);
  }
 
  return (
    <>
    <NavbarCompo/>

    <section className='mt-5 mb-5'>
        <div className="container  pe-5 ps-5">
            <div className="col-md-12">
            
                <h3 className=''>Cart Product</h3>
            <Zoom clear>          
                <div className="checkout shadow rounded text-global-color">
                   
                    <div className="checkout-header  " style={{backgroundColor:'#432818', color:'#ffff'}}>
                        
                    </div>
                    <div className="checkout-body border-bottom">
                    <Table  className='rounded table-borderless  ' style={{}}>
                        <thead >
                            <tr className='text-center'>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Produk</th>
                            <th>Nama Produk</th>
                            <th>Jumlah</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody className='text-global-color'>
                            <tr className='text-center'>
                            <td>
                                <input type="checkbox" className='mt-3' />
                            </td>
                            <td>
                                <div className=''>
                                    <img className='img-fluid rounded' src="image/coffee2.jpg" alt="" style={{height: '50px', width:'50px'}} />
                                </div>
                            </td>
                            <td>V60 Coffee</td>
                            <td className='text-center'>
                                <div className="handle-counter2 rounded-phill " id="handleCounter1">
                                    <button className="counter-minus2 btn btn-outline-dark border" onClick={ () =>decrementCounter()}><FontAwesomeIcon icon={faMinus} /></button>
                                    <Form.Control
                                    placeholder=""
                                    type="text"
                                    value={count}
                                    />
                                    <button className="counter-plus2 btn btn-dark border" onClick={incrementCounter}><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                                
                            </td>
                            <td>Rp.25000</td>
                            <td>
                            
                                <button className='btn btn-outline-danger btn-sm '><FontAwesomeIcon icon={faTrash}/> </button>
                        
                            </td>
                            </tr>
                            <tr className='text-center'>
                            <td>
                                <input type="checkbox" className='mt-3'/>
                            </td>
                            <td>
                                <div className=''>
                                    <img className='img-fluid rounded' src="image/coffee.jpg" alt="" style={{height: '50px', width:'50px'}} />
                                </div>
                            </td>
                            <td>V60 Coffee</td>
                            <td>
                            <div className="handle-counter2 rounded-phill " id="handleCounter1">
                                    <button className="counter-minus2 btn btn-outline-dark border" onClick={ () =>decrementCounter()}><FontAwesomeIcon icon={faMinus} /></button>
                                    <Form.Control
                                    placeholder=""
                                    type="text"
                                    value={count}
                                    />
                                    <button className="counter-plus2 btn btn-dark border" onClick={incrementCounter}><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                                
                            </td>
                            <td>Rp.25000</td>
                            <td>
                            
                                <button className='btn btn-outline-danger btn-sm '><FontAwesomeIcon icon={faTrash}/> </button>
                        
                            </td>
                            </tr>
                            <tr className='text-center'>
                            <td >
                                <input type="checkbox" className='mt-3'/>
                            </td>
                            <td>
                                <div className=''>
                                    <img className='img-fluid rounded' src="image/coffee3.jpg" alt="" style={{height: '50px', width:'50px'}} />
                                </div>
                            </td>
                            <td>Cappuchino</td>
                            <td>
                            <div className="handle-counter2 rounded-phill " id="handleCounter1">
                                    <button className="counter-minus2 btn btn-outline-dark border" onClick={ () =>decrementCounter()}><FontAwesomeIcon icon={faMinus} /></button>
                                    <Form.Control
                                    placeholder=""
                                    type="text"
                                    value={count}
                                    />
                                    <button className="counter-plus2 btn btn-dark border" onClick={incrementCounter}><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                                
                            </td>
                            <td>Rp.25000</td>
                            <td>
                            
                                <button className='btn btn-outline-danger btn-sm '><FontAwesomeIcon icon={faTrash}/> </button>
                        
                            </td>
                            </tr>
                        
                        </tbody>
                        </Table>

                        
                    </div>
                    <div className="checkout-footer mt-3">
                        <div className="d-flex justify-content-end p-3 border-bottom border-bottom ">

                            <div className='text-global-color' style={{marginRight:'200px'}}>
                                {/* <h6>Subtotal</h6>
                                <h6>Pajak</h6>
                                <h6>Diskon</h6>
                                <h6>Ongkos Kirim</h6> */}
                                <h4 className='mt-3'>Subtotal</h4>

                            </div>
                            <div className='text-global-color'>

                                {/* <h6>Rp.25.000</h6>
                                <h6>Rp.1000</h6>
                                <h6>0</h6>
                                <h6>0</h6> */}
                                <h4 className='text-danger mt-3'>Rp.25.000</h4>
                            </div>
                        </div>

                        <Link to='/payment' className='text-decoration-none'>
                        <div className='d-flex justify-content-end mt-3 pb-3 pe-3'>
                                <button className='btn-global2'>Lanjut Checkout
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


