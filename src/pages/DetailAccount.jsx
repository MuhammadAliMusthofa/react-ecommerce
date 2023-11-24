import React from 'react';
import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import CoffeeContent from "../components/CoffeeCompo";
import CoffeeMakerContent from "../components/CoffeeMaker";
import NonCoffeeContent from "../components/NonCoffee";
import ToastContent from "../components/Toast";
import FilterContent from "../components/Filter";
import DessertContent from "../components/Dessert";
import Footer from "../components/Footer";
import ProfileContent from "../components/ProfileContent";
import EditProfileContent from "../components/EditProfileContent";
import SetAlamat from "../components/SetAlamat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
 import Pagination from 'react-bootstrap/Pagination';
 import { Nav } from 'react-bootstrap';

// import NavbarCompo from "../components/Navbar";




export default function HomePageToko() {
  // hendle sidebar menu
  const [activeMenu, setActiveMenu] = useState('profile');
  const handleCategoryClick = (menu) => {
    setActiveMenu(menu);
  };
  const getCategoryStyle = (menu) => {
    return {
      background: activeMenu === menu ? 'linear-gradient(to right, #ddb892, #d2ac87, #c6a07d, #bb9572, #b08968)' : 'none',
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
                        
                          <div  className="d-flex flex-column bg-light rounded-bottom mt-5">
                            <p style={{fontSize:'16px', fontWeight:'500'}}>Aktivitas</p>
                            <div className="kategori mb-2 rounded p-1 font-weight-bold shadow "
                              style={getCategoryStyle('profile')}
                              onClick={() => handleCategoryClick('profile')}>
                            <p  className=' mt-1 ms-2' style={{fontSize:'14px', fontWeight:'500'}}>Daftar Transaksi</p>
                            </div>
                            <div className="kategori mb-2 rounded p-1 font-weight-bold shadow  "
                                style={getCategoryStyle('edit-profile')}
                                onClick={() => handleCategoryClick('edit-profile')}>
                              <h6 className=' mt-1 ms-2'>Wish List</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('set-alamat')}
                               onClick={() => handleCategoryClick('set-alamat')}>
                              <h6 className=' mt-1 ms-2'>Pengaturan Alamat</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('history')}
                               onClick={() => handleCategoryClick('history')}>
                              <h6 className=' mt-1 ms-2'>Riwayat Pesanan</h6>
                            </div>
                      
                          </div>
                </div>
        
       
                <div className="col-md-9">
                   <div className='shadow rounded'>

                      {activeMenu === 'profile' && <ProfileContent />}
                      {activeMenu === 'edit-profile' && <EditProfileContent />}
                      {activeMenu === 'set-alamat' && <SetAlamat />}
                      {activeMenu === 'history' && <FilterContent />}
                   </div>
                    
                
                </div>
                    <div className='Paginasi d-flex justify-content-center' >
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
      
      <div className="footer p-2">
          <Footer/>
      </div>
      
    </>
  )
}


