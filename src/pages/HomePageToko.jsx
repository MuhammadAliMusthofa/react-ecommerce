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
import { useEffect } from 'react';
import Fade  from 'react-reveal/Fade';
import Zoom  from 'react-reveal/Zoom';
import Bounce  from 'react-reveal/Bounce';
// import WOW from 'wowjs';


export default function SearchResult() {
    
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
    <section className='' >
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
                                        <div>
                                            <img src="image/coffeee.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
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
                                            <img src="image/coffeemaker.png" alt="" className="img-fluid" style={{height:'80px'}}/>
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
                                            <img src="image/bijikopi.png" alt="" className="img-fluid" style={{height:'80px'}}/>
                                        </div>
                                    </div>
                                </div>
                                <small className='text-global-color ' style={{fontWeight:'bold'}}>Coffee Beans</small>
                            </Link>
                            
                        </div>
                    </Fade>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* poster promo */}
    <section className="">
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


<section className='mt-5'>
<div class="container pe-5 ps-5">
  <div class="row">
    <div class="col-md-12 ">
        <h3>All Product</h3>
      <div class="custom-card text-center text-global-color">
        <div className="card-gg  mb-4 shadow rounded-3">
            <div className="image mb-2">
            <img src="image/coffeee.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino</p>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <p style={{fontSize:'14px'}} className='me-2 text-decoration-line-through'>Rp.30000</p>
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
            <div className="image mb-2">
            <img src="image/redvelvet.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
            <img src="image/shiponfilter.png" alt="" className='img-cover' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
            <img src="image/milkshakeoreo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/milo.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/taro.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/dessert.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/toast/frenchtoast.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/toast/nuttellatoast.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/aeropress.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
            <div className="image mb-2">
                <img src="image/chemexfilter.png" alt="" className='img-fluid' style={{height:'122px'}}/>
            </div>

            <div className="title-product multi-line-ellipsis mb-2">
                 <p style={{fontSize:'16px'}}>Cappucino wertyuioiuytr sdfghjhgfd</p>
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
    {/* all products */}
    

    {/* best seller */}
    <section className=' '>
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
    <section className="">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4">
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
                <div className="col-md-12 pe-5 ps-5 py-4">
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
    <section className=" ">
        <div className="container">
            <div className="row">
                <div className="col-md-12 pe-5 ps-5 py-4">
                    <Bounce clear>
                        <img src="image/katarasa-kopi.png" alt="poster promo" className="img-fluid w-100 rounded mb-5" style={{height:'200px'}} />
                    </Bounce>
                </div>
            </div>
        </div>
    </section>

    {/* best seller */}
    <section className=''>
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


