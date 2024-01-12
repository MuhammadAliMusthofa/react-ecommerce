import React from 'react';
import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";

import VoucherContent from "../components/VoucherContent";

import Footer from "../components/Footer";
import ProfileContent from "../components/ProfileContent"; 
import Transaction from "../pages/TransactionDone"; 


import SetAlamat from "../components/SetAlamat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLocationDot , faTruck, faHeart, faMoneyBillTransfer, faFilm} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
 import Pagination from 'react-bootstrap/Pagination';
 import { Nav, Accordion } from 'react-bootstrap';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import TransactionContent from "../components/TransactionContent";
import EventContent from "../components/EventContent";
import ReturContent from "../components/ReturContent";

// import NavbarCompo from "../components/Navbar";




export default function HomePageToko() {
  const [activeMenu, setActiveMenu] = useState('profile');

  const handleCategoryClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const getCategoryStyle = (menu) => {
    return {
      background:
        activeMenu === menu
          ? 'linear-gradient(to right, #ddb892, #d2ac87, #c6a07d, #bb9572, #b08968)'
          : 'none',
      color: activeMenu === menu ? '#fff' : '#000',
    };
  };
  return (
    <>
      <NavbarCompo  className='mb-5'/>
      
    <section className='mt-4 mb-4 p-4'>
        <div className=" container pe-5 ps-5">
            <div className='row'>
                <div class="col-md-3 mb-3 shadow rounded">     
                        <div className='text-center'>
                          <img src="image/profile.png" alt="" style={{width:'80px', height:'80px'}} className='rounded-circle bg-secondary mt-4'/>
                          <h6 className='mt-3'>Muhammad Ali </h6>
                          <h6 className='mt-3 p-1 w-100 mx-auto mb-4 rounded' style={{backgroundColor:'#e9ecef', fontSize:'12px'}}>ali@gmail.com </h6>
                          
                          <div className='w-100 py-4 px-2 rounded-3 btn-global2 text-white d-flex  align-items-center'  >
                            <div>
                              <img src="image/medali.png" alt="" style={{width:'30px', height:'30px'}} />
                            </div>
                             <div className='mt-3 ms-2'>
                                <p style={{fontSize:'14px', fontWeight:'600'}}>Pengopi Pemula</p>
                             </div>
                             <div className='mt-3 ms-3 '>
                              <p style={{fontSize:'14px', fontWeight:'600'}}>100 XP</p>
                             </div>
                          </div>
                          <div className='mt-4 w-100 py-4 px-2 rounded-3 btn-global2 text-white d-flex align-items-center' style={{ height: '80px', backgroundImage: 'linear-gradient(to left, #e9ecef, #c1cdd0, #9caeac, #7f9084, #6b705c)' }}>
                              <div>                                                                                                                 
                                <img src="image/medali.png" alt="" style={{ width: '30px', height: '30px' }} />
                              </div>
                              <div className=' ms-2 text-start' style={{ lineHeight: '1.5' }}>
                                <p style={{ fontSize: '13px', margin: '0' }}>Dapatkan Voucher</p>
                                <p style={{ fontSize: '13px', margin: '0' }}>10000</p>
                                <p style={{ fontSize: '13px', margin: '0' }}>setiap mengajak 1 teman</p>
                              </div>
                            </div>
                        </div>
                        

                        {/* Akun */}
                          <div  className="d-flex flex-column rounded-bottom mt-5">
                            {/* <p style={{fontSize:'16px', fontWeight:'500'}}>Akun</p> */}
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header style={{fontSize:'16px', fontWeight:'500'}}>Akun</Accordion.Header>
                                  <Accordion.Body>

                                      <div className="kategori mb-2 rounded p-2 font-weight-bold shadow "
                                        style={getCategoryStyle('profile')}
                                        onClick={() => handleCategoryClick('profile')}>
                                      <p  className=' my-auto ms-2' style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faUser} className='me-3'/>Akun</p>
                                      </div>
                                      <div className="kategori mb-2 rounded p-2 font-weight-bold shadow  "
                                          style={getCategoryStyle('set-alamat')}
                                          onClick={() => handleCategoryClick('set-alamat')}>
                                        <h6 className=' my-auto ms-2'  style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faLocationDot}  className='me-3' />Alamat</h6>
                                      </div>
                                  </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                          
                        {/* Aktivitas */}
                          <div  className="d-flex flex-column rounded-bottom">
                          {/* <p style={{fontSize:'16px', fontWeight:'500'}}>Aktivitas</p> */}

                            <Accordion defaultActiveKey="0" flush>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header style={{fontSize:'16px', fontWeight:'500'}}>Aktivitas</Accordion.Header>
                                <Accordion.Body>
                                    <Accordion defaultActiveKey="1" flush className='fluid'>
                                      <Accordion.Item eventKey="1">
                                        <Accordion.Header style={{fontSize:'16px', fontWeight:'500'}}><FontAwesomeIcon icon={faClipboard} className='me-3'/>Daftar Transaksi</Accordion.Header>
                                          <Accordion.Body>
                                            <div className="kategori mb-2 rounded p-2 font-weight-bold shadow "
                                              style={getCategoryStyle('transaksi')}
                                              onClick={() => handleCategoryClick('transaksi')}>
                                            <p  className=' my-auto ms-2' style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faMoneyBillTransfer} className='me-3'/>Transaksi</p>
                                            </div>
                                            <div className="kategori mb-2 rounded p-2 font-weight-bold  "
                                                style={getCategoryStyle('event')}
                                                onClick={() => handleCategoryClick('event')}>
                                              <h6 className=' my-auto ms-2'  style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faFilm}  className='me-3' />Event</h6>
                                            </div>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                    <div className="kategori mb-2 rounded p-2 font-weight-bold shadow "
                                                style={getCategoryStyle('voucher')}
                                                onClick={() => handleCategoryClick('voucher')}>
                                              <h6 className=' my-auto ms-2'  style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faTicket} className='me-3'/>Voucher</h6>
                                    </div>
                                    <div className="kategori mb-2 rounded p-2 font-weight-bold shadow "
                                                style={getCategoryStyle('wishlist')}
                                                onClick={() => handleCategoryClick('wishlist')}>
                                              <h6 className=' my-auto ms-2'  style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faHeart}  className='me-3' />Wishlist</h6>
                                    </div>
                                    <div className="kategori mb-2 rounded p-2 font-weight-bold shadow "
                                                style={getCategoryStyle('retur')}
                                                onClick={() => handleCategoryClick('retur')}>
                                              <h6 className=' my-auto ms-2'  style={{fontSize:'15px', fontWeight:'500'}}><FontAwesomeIcon icon={faTruck}  className='me-3' />Pengembalian Barang</h6>
                                    </div>
                                    
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                </div>
       
                <div className="col-md-9">
                   <div className='shadow rounded'>

                      {activeMenu === 'profile' && <ProfileContent />}
                      {activeMenu === 'set-alamat' && <SetAlamat />}
                      {activeMenu === 'transaksi' && <TransactionContent />}
                      {activeMenu === 'event' && <EventContent />}
                      {activeMenu === 'voucher' && <VoucherContent />}
                      {activeMenu === 'wishlist' && <ProfileContent />}  
                      {activeMenu === 'retur' && <ReturContent />}
                   </div>
                    
                
                </div>
                    <div className='Paginasi d-flex justify-content-center mt-5' >
                            <Pagination className='paginasi'>
                            
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Next />
                           
                            </Pagination>
                    </div>
            </div>
        </div>
    </section>
      
    <section >
      <div className="footer p-2">
          <Footer/>
      </div>

    </section>
      
    </>
  )
}


