import React from 'react';
// import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import CarauselCompo from "../components/Carausel";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
import Fade  from 'react-reveal/Fade';
import Zoom  from 'react-reveal/Zoom';
import Bounce  from 'react-reveal/Bounce';
// import WOW from 'wowjs';
import axios from 'axios';


export default function Homepage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Definisikan URL API Anda di sini
        const apiUrl = 'http://103.235.73.11:2030/product/get-product?page=1&limit=5&keyword=&filter_price=&filter_category=&filter_condition=&filter_preorder=&filter_brand=&filter_etalase=&sort='; // Ganti dengan URL API Anda
    
        // Lakukan permintaan GET menggunakan Axios
        axios.get(apiUrl)
          .then(response => {
            // Dapatkan data produk dari respons API dan simpan ke state
            setProducts(response.data);
          })
          .catch(error => {
            // Tangani kesalahan jika permintaan gagal
            console.error('Error fetching data: ', error);
          });
      }, []);

  return (
    <>
    <NavbarCompo/>

    <section className='mt-4 '>
        <div className="container ">
            <div className="row">
                <div className="col-md-12 rounded pe-5 ps-5">
                    <Zoom clear>
                    <CarauselCompo/>        

                    </Zoom>
                </div>
            </div>

        </div>
    </section>

    {/* kategori */}
    <section className='mt-3' >
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4" >
                    <h3>Kategori</h3>         
                    <div className="kategori row p-lr-3 ">
                    <Fade left>

                        <div className=" col-3 col-md-3 px-2 mb-2 text-center" >

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                       
                                            <img src="image/coffeee.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        
                                    </div>
                                </div>
                                <small className='text-global-color' style={{fontWeight:'bold'}}>coffee</small>
                            </Link>
                            
                        </div>
                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/redvelvet.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Non Coffee</small>
                            </Link>
                            
                        </div>
                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/milkshakeoreo.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Ice Cream</small>
                            </Link>
                            
                        </div>
                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/toast/nuttellatoast.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Toast</small>
                            </Link>
                            
                        </div>
                    </Fade>

                    <Fade right>

                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/dessert.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Dessert</small>
                            </Link>
                            
                        </div>
                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/espressoMachine.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Coffe Maker</small>
                            </Link>
                            
                        </div>
                        <div className="col-3 col-md-3 px-2 mb-2 text-center">

                            <Link to='/hasil-cari' className='text-decoration-none text-dark bold'>
                                <div className="card shadow">
                                    <div className="card-body p-3">
                                        <div>
                                            <img src="image/chemexfilter.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Coffee Filter</small>
                            </Link>
                            
                        </div>
                    </Fade>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Zona Pengguna Baru */}
    <section className='mt-3'>
    <div className='container color-old rounded pe-5 ps-5 '>
          <div className="col-md-12 p-3 rounded bg-secondary" style={{backgroundImage:' linear-gradient(to bottom, #4a5759, #6d787a, #919b9c, #b7bfc0, #dfe4e5)'}}> 
                <h3 className='text-center text-white mb-3'>Zona Pengguna Baru</h3>
            <Fade left>
                <div className='d-flex justify-content-between bg-white p-3 mb-3 rounded'>
                    <div className="shadow  col-md-4 me-2 d-flex rounded">
                        
                        <div className='rounded-start d-flex align-items-center' style={{backgroundImage:' linear-gradient(to left, #4a5759, #3a4145, #2b2c30, #1a191b, #000000)'}}>
                            <img src="image/katarasaBrand.png" alt="" className='rounded-start bg-cover' style={{width:'100px', height:'50%'}}/>
                        </div>
                        <div className='p-2 mt-2' style={{lineHeight:'0.4'}}>
                            <p style={{fontSize:'12px', fontWeight:'bold'}}>Diskon Pengguna Baru</p>
                            <p style={{fontSize:'12px'}}>Rp.17.000</p>
                            <p style={{fontSize:'12px'}}>Katarasa Latte</p>
                        </div>
                    </div>
                    <div className="shadow  col-md-4 d-flex me-2 rounded">
                        <div className='rounded-start d-flex align-items-center' style={{backgroundImage:' linear-gradient(to left, #4a5759, #3a4145, #2b2c30, #1a191b, #000000)'}}>
                            <img src="image/katarasaBrand.png" alt="" className='rounded-start bg-cover' style={{width:'100px', height:'50%'}}/>
                        </div>
                        <div className='p-2 mt-2' style={{lineHeight:'0.4'}}>
                            <p style={{fontSize:'12px', fontWeight:'bold'}}>Gratis Ongkir</p>
                            <p style={{fontSize:'12px'}}>Rp.5.000</p>
                            <p style={{fontSize:'12px'}}>Minimal 2 pcs produk</p>
                        </div>
                    </div>
                    <div className="shadow  col-md-4 d-flex me-2 rounded">
                        <div className='rounded-start d-flex align-items-center' style={{backgroundImage:' linear-gradient(to left, #4a5759, #3a4145, #2b2c30, #1a191b, #000000)'}}>
                            <img src="image/katarasaBrand.png" alt="" className='rounded-start bg-cover' style={{width:'100px', height:'50%'}}/>
                        </div>
                        <div className='p-2 mt-2' style={{lineHeight:'0.4'}}>
                            <p style={{fontSize:'12px', fontWeight:'bold'}}>Spesial Pengguna Baru</p>
                            <p style={{fontSize:'12px'}}>Rp.50.000</p>
                            <p style={{fontSize:'12px'}}>Buy 2 get 3</p>
                        </div>
                    </div>
                    
                </div>
            </Fade>
            
            <h6 className='text-white mt-4 mb-2'>Belanja dengan jumlah tertentu akan mendapatkan penawaran menarik </h6>
            <Fade bottom>
                <div className="custom-card text-center ">
                                <div className="card-gg1  mb-4 shadow rounded-3">
                                    <div className="image mb-2">
                                    <img src="image/coffeee.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                    </div>

                                    <div className="title-product multi-line-ellipsis mb-2">
                                        <p style={{fontSize:'16px'}}>Cappucino</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center mt-3'>
                                        <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through text-danger'>Rp.30000</p>
                                        <p style={{fontSize:'16px'}}>Rp.20000</p>
                                    </div>
                                    <div className="p-2">
                                        
                                    
                                    </div>
                                </div>
                                <div className="card-gg1 mb-4 shadow rounded-3">
                                    <div className="image mb-2">
                                    <img src="image/redvelvet.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                    </div>

                                    <div className="title-product multi-line-ellipsis mb-2">
                                        <p style={{fontSize:'16px'}}>Red Velvet - Latte Maximus Cream Puff</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through text-danger'>Rp.30000</p>
                                        <p style={{fontSize:'16px'}}>Rp.20000</p>
                                    </div>
                                    <div className=" p-2 ">
                                    
                                    </div>
                                </div>
                                <div className="card-gg1 mb-4 shadow rounded-3">
                                    <div className="image mb-2">
                                    <img src="image/soda.png" alt="" className='img-cover' style={{height:'122px'}}/>
                                    </div>

                                    <div className="title-product multi-line-ellipsis mb-2">
                                        <p style={{fontSize:'16px'}}>Coffe Maker - making fast coffe with machine automatic </p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through text-danger'>Rp.50000</p>
                                        <p style={{fontSize:'16px'}}>Rp.39000</p>
                                    </div>
                                    <div className=" p-2 ">
                                    
                                    </div>
                                </div>
                                <div className="card-gg1 mb-4 shadow rounded-3">
                                    <div className="image mb-2">
                                    <img src="image/milkshakeoreo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                    </div>

                                    <div className="title-product multi-line-ellipsis mb-2">
                                        <p style={{fontSize:'16px'}}>Ice Cream - Oreo</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center '>
                                        <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through text-danger'>Rp.40000</p>
                                        <p style={{fontSize:'16px'}}>Rp.25000</p>
                                    </div>
                                    <div className=" p-2 ">
                                    
                                    </div>
                                </div>
                                
                                <div className="card-gg1 mb-4 shadow rounded-3">
                                    <div className="image mb-2">
                                        <img src="image/milo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                    </div>

                                    <div className="title-product multi-line-ellipsis mb-2">
                                        <p style={{fontSize:'16px'}}>Milo Taste  </p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through text-danger'>Rp.30000</p>
                                        <p style={{fontSize:'16px'}}>Rp.20000</p>
                                    </div>
                                    <div className="p-2">
                                    
                                    </div>
                                </div>
                </div>
            </Fade>

            
          </div>
        </div>
    </section>


    {/* poster promo */}
    <section className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4">
                    <Fade right>

                        <img src="https://katarasa.id/img/view1.1469307f.png" alt="poster promo" className="img-fluid w-100 rounded " style={{height:'200px'}} />
                    </Fade>
                </div>
            </div>
        </div>
    </section>

    {/* all products */}
    <section className='mt-3'>
        <div class="container pe-5 ps-5">
        <div class="row">
            <div class="col-md-12 ">
                <h3>All Product</h3>
                {products.map(product => (
                <li key={product.product_id}>
                    <h2>{product.name}</h2>
                    <p>Harga: {product.price}</p>
                    {/* Tambahkan informasi produk lainnya sesuai kebutuhan */}
                </li>
                ))}
            <div class="custom-card text-center text-global-color">
                <Zoom clear>
                

                        <div className="card-gg  mb-4 shadow rounded-3" >
                            <Link to='/product-detail' className='text-decoration-none'>
                                <div className="image mb-2">
                                <img src='image/coffeee.png' alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Cuppuchino </p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                                <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20.000</p>
                            </div>
                            <div className="p-2">
                                
                            <Link to='/cart'>
                  

                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                               
                            </Link>
                            </div>
                        </div>      
                        <div className="card-gg mb-4 shadow rounded-3">

                             <Link to='/product-detail' className='text-decoration-none'>
                            
                                <div className="image mb-2">
                                <img src="image/redvelvet.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Red Velvet</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className=" p-2 ">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                            
                                <div className="image mb-2">
                                <img src="image/shiponfilter.png" alt="" className='img-cover' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Shipon Filter </p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className=" p-2 ">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                            
                                <div className="image mb-2">
                                <img src="image/milkshakeoreo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Milkshake</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center '>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className=" p-2 ">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>                        
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>                         
                                <div className="image mb-2">
                                    <img src="image/milo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Milo Booster</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>                          
                                <div className="image mb-2">
                                    <img src="image/taro.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Taro</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                            
                                <div className="image mb-2">
                                    <img src="image/dessert.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Tiramisu</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>                            
                                <div className="image mb-2">
                                    <img src="image/toast/frenchtoast.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>French Toast</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                                <div className="image mb-2">
                                    <img src="image/toast/nuttellatoast.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Butter Toast</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                                <div className="image mb-2">
                                    <img src="image/aeropress.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            
                            </Link>

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Aeropress</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                        <div className="card-gg mb-4 shadow rounded-3">
                            <Link to='/product-detail' className='text-decoration-none'>
                            
                                <div className="image mb-2">
                                    <img src="image/chemexfilter.png" alt="" className='img-fluid' style={{height:'122px'}}/>
                                </div>
                            </Link> 

                            <div className="title-product multi-line-ellipsis mb-2">
                                <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd Cappucino wertyuioiuytr sdfghjhgfd asdfghjklzxcvbn</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p style={{fontSize:'14px'}} className='me-2'>Rp.30000</p>
                                <p style={{fontSize:'16px'}}>Rp.20000</p>
                            </div>
                            <div className="p-2">
                            <Link to='/cart'>
                                <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Keranjang
                                < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                </button>
                            </Link>
                            </div>
                        </div>
                </Zoom>   
            </div>
                    <div className='Paginasi d-flex justify-content-center mt-3' >
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
        </div>
    </section>
    
    

    {/* best seller */}
    <section className=' mt-3'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4">
                    <h3>Best Seller Kata&Rasa</h3>

                    <Fade left>

                        <div className="product row p-lr-3">
                        
                            <div className="col-3 col-md-2 px-2 mb-2 text-center  ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/coffeee.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Cuppuchino Latte</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/redvelvet.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Red Velvet</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/toast/frenchtoast.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>French Toast</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/dessert.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Tiramisu Dessert</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/dripcoffeemaker.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Drip Coffee Maker</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center ">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/shiponfilter.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Shipon Coffee Fillter</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
        
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </section>

    {/* poster promo */}
    <section className="mt-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 pt-4">
                    <Bounce clear>

                        <img src="https://katarasa.id/img/NonCoffeeBanner.9f23f351.png" alt="poster promo" className="img-fluid w-100 rounded mb-5" style={{height:'200px'}} />
                    </Bounce>
                </div>
            </div>
        </div>
    </section>

    {/* non coffee */}
    <section className=' '>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 pb-4">
                    <h3>Non Coffe And Drinks</h3>
                    <Fade right>
                        <div className="product row p-lr-3">
                        {/* <Link to='/hasil-cari' className='text-decoration-none text-dark'><h5 className='text-end p-2'>View More..</h5></Link> */}
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/macha.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Macha Latte</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/taro.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Taro</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/redvelvet.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Red Velvet</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/milkshakeoreo.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Milkshake Oreo</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/milo.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Milo </p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/soda.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Bubble Float</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
        
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    </section>

    {/* poster promo */}
    <section className="">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 pt-4">
                    <Fade clear>
                        <img src="image/katarasa-kopi.png" alt="poster promo" className="img-fluid w-100 rounded mb-5" style={{height:'200px'}} />
                    </Fade>
                </div>
            </div>
        </div>
    </section>

     {/* poster katarasa exclusive */}
     <section className=''>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 pb-4">
                    <h3>Kata&Rasa Exclusive </h3>

                    <Fade left>

                        <div className='d-flex justify-content-between'>
                            <div className="col-md-4"  style={{height:'200px', width:'333px'}}>
                                <img src="image/spesial2.png" alt="" className='img-fluid rounded' style={{height:'100%', width:'100%'}} />
                            </div>
                            <div className="col-md-4"  style={{height:'200px', width:'333px'}}>
                                <img src="image/spesial3.png" alt="" className='img-fluid  rounded' style={{height:'100%', width:'100%'}} />
                            </div> 
                            <div className="col-md-4"  style={{height:'200px', width:'333px'}}>
                                <img src="image/spesial1.png" alt="" className='img-fluid rounded' style={{height:'100%', width:'100%'}} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </section>   

    {/* best seller */}
    <section className='mt-3 mb-3'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4">
                    <h3>Foods</h3>

                    <Fade left>

                        <div className="product row p-lr-3">
                        
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/toast/croissant.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Croissant</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/toast/nuttellatoast.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Nuttella Toast</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/toast/frenchtoast.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>French Toast</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/dessert.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Tiramisu Dessert</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/toast/nuttellatoast.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Nutella</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
                            <div className="col-3 col-md-2 px-2 mb-2 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card-best shadow rounded-3'>
                                            <Card.Img variant="top" src="image/kentang.png" className='img-fluid' style={{height:'150px'}} />
                                            <Card.Body>
                                            {/* <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino lezatos the real coffee for the man who can beat me</Card.Title> */}
                                            <p className='text-global-color multi-line-ellipsis ' style={{fontSize:'15px'}}>Kentang</p>
                                            </Card.Body>
                                            
                                        </Card>
                                    </CardGroup>
                                </Link>
                            </div>
        
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
    <div className="p-2 footer">
        <Footer/>
    </div>
    </>
// https://katarasa.id/img/NonCoffeeBanner.9f23f351.png
  )
}


