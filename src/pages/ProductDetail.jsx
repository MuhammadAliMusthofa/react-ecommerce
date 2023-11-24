import React from 'react';
import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import TextComponent from "../components/TextCompo";
import Rating from "../components/RatingCompo";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';
import { Zoom } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("/desc");
  const [selectedImage, setSelectedImage] = useState('image/coffeee.png'); // Inisialisasi gambar pertama
  // Fungsi untuk mengubah gambar yang ditampilkan di col-md-10
  const changeImage = (newImage) => {
    setSelectedImage(newImage);
  };

  const [count, setCount] = useState(1);

  // Fungsi untuk menambahkan 1 ke nilai counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangkan 1 dari nilai counter
  const decrementCounter = () => {
    setCount(count - 1);
  };


  return (
    <>
    <NavbarCompo/>

    <div className="container mb-3 mt-3 ps-5 pe-5">
        <h2 className='text-start text-global-color '>Product Detail</h2>

    </div>

    {/* Detail Product */}
    <section>
      <div className='container d-flex justify-content-center pe-5 ps-5'>
        <Zoom clear>
            <div   className='col-md-12 d-flex align-items-center rounded shadow ' style={{}} >

                <div  className='col-md-5 d-flex  justify-content-center flex-column ' >
                    <div className='d-flex  justify-content-center'>

                      <img  src={selectedImage} alt=""  className='rounded-4 px-auto img-product-detail' />
                    </div>
                    
                    <div className='d-flex justify-content-around mt-3'>
                    <div onClick={() => changeImage('image/coffeee.png')}><img src="image/coffeee.png" alt="" className='img-fluid border rounded mb-2  img-product-detail-sub '/></div>
                      <div onClick={() => changeImage('image/coffee.jpg')}><img src="image/coffee.jpg" alt="" className='img-fluid border rounded mb-2  img-product-detail-sub'/></div>
                      <div onClick={() => changeImage('image/coffee3.jpg')}><img src="image/coffee3.jpg" alt="" className='img-fluid border rounded img-product-detail-sub' /></div>
                    </div>
                </div>

                
                <div className='col-md-7 p-2 text-global-color' > 
                    <h3>Cappuchino - The Kings of Coffee</h3>
                    <div>
                        <h6 >Size </h6>
                        <Form.Select className='w-50'>
                          <option>Reguler</option>
                          <option>Medium</option>
                          <option>Large</option>
                        </Form.Select>
                    </div>
                  
                    <div className='mb-3 mt-3'>
                        <h6 className='my-auto ' >Quantity </h6>
                        <div className="handle-counter rounded-phill " id="handleCounter1">
                            <button className="counter-minus btn btn-outline-dark border" onClick={ () =>decrementCounter()}><FontAwesomeIcon icon={faMinus} /></button>
                            <Form.Control
                            placeholder=""
                            type="text"
                            value={count}
                            />
                            <button className="counter-plus btn btn-outline-dark border" onClick={incrementCounter}><FontAwesomeIcon icon={faPlus}/></button>
                        </div>
                    </div>

                    <div className=''> 
                      <h6>Harga</h6>
                      <div className='d-flex'>

                        <h6 className='text-decoration-line-through  ' style={{marginRight:'20px'}}>Rp.30.000</h6>  
                        <h5 className='text-danger bold ' style={{}}>Rp.25.000</h5>  
                      </div>
                  </div>
                  <Link to='/cart'>
                      <button className='product-button-cart w-50 text-light p-1 rounded border shadow button-detail' style={{height:'53px'}}>Masukkan keranjang
                      < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                      </button>
                  </Link>
                </div>
              
            </div>

        </Zoom>
      </div>
    </section>

    {/* Deskripsi */}
    <Fade left>
      <section className='mt-5 text-global-color-title '>
        <div className="container ">
            <div className='col-md-12 pe-5 ps-5'>
              <div className='spesifikasi text-global-color'>
                <h3 >Informasi Produk :</h3>

                  <p className='mt-4 mb-2 '>Spesifikasi</p> 
                <div className='ms-3'>
                  <ul>
                    <li>kopi estetik</li>
                    <li>beraroma</li>
                    <li>kopi estetik</li>
                    <li>kopi estetik</li>
                  </ul>
                </div>
              </div>
              <div className='Deskripsi mt-5 mb-5 text-global-color'>
                <h3 style={{color:'black !important'}}>Deskripsi</h3>
                <p className='mt-4 mb-2 '> Cappuchino - The Kings of Coffee</p> 
              </div>
            </div>


        </div>

        <div className='container color-old rounded pe-5 ps-5 '>
          <div className="col-md-12 p-3 rounded"   style={{backgroundImage: 'linear-gradient(to right, #e6ccb2, #e4c7aa, #e2c2a2, #dfbd9a, #ddb892)'}}>
            <h6>Brands</h6>
            <div className='brand-title d-flex mt-4 align-items-center'> 
              <img className='me-2 rounded' src="image/coffee.jpg" alt=""  style={{width:'80px', height:'40px'}} />
              <h6 className='ms-3'>Kopi</h6>
            </div>
            <div className='mt-2'>
              <TextComponent 
              initialText="Otten Coffee menjual biji kopi terbaik untuk segala kebutuhan, untuk minum kopi sendiri di rumah maupun bisnis kopi. Harga kopi di Otten Coffee sepadan dengan kualitasnya. Kami menyediakan racikan eksklusif biji kopi Nusantara dan Mancanegara. Temukan biji kopi yang paling pas untukmu! Arabika, fine robusta, kopi house blend bahkan biji kopi premium lainnya." 
              maxLength={20} />
            </div>
          </div>
        </div>
      </section>
    </Fade>

    {/* ulasan */}
    <section className='mt-5 text-global-color mb-5'>
      <Fade left>

        <div className="container p-4 rounded pe-5 ps-5">
          <h3>Ulasan</h3>
            
          <div className="col-md-12 pe-5 ps-5 rounded">
            <Rating/>
          </div> 

        </div>
      </Fade>
    </section>


    {/* banner */}
    <section className='mb-5'>
      <div className="container">
        <div className="col-md-12 pe-5 ps-5">
          <Zoom clear>

              <img className='w-100 rounded-2' src="image/katarasa-kopi.png" alt="" />
          </Zoom>
          
        </div>
      </div>
    </section>

    {/* Product Terkait */}
    {/* all products */}
    <section className='mt-5 mb-5 p-4'>
        <div className=" container">
            <div className='row'>
                <div className="col-md-12 pe-5 ps-5">
                    <h3>Product Terkait</h3>
                    <Zoom clear>

                      <div className="product row p-lr-3">
                          <div className="col-3 col-md-3 px-2 mb-3 text-center">
                              <Link to='/product-detail' className='text-decoration-none'>
                                  <CardGroup>
                                      <Card className='fixed-card shadow'>
                                          <Card.Img variant="top" src="image/taro.png" className='img-fluid' style={{height:'170px'}} />
                                          <Card.Body>
                                          <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Taro lezatos the real coffee for the man who can beat me</Card.Title>
                                          <div className='d-flex justify-content-center flex-column'> 

                                                      <h6 className='text-decoration-line-through text-global-color'>Rp.30.000</h6>  
                                                      <h5 className='text-danger bold' style={{}}>Rp.25.000</h5>  
                                          </div>
                                          </Card.Body>
                                          <Card.Footer>
                                          <Link to='/cart'>
                                              <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Masukkan keranjang
                                              < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                              </button>
                                          </Link>
                                          </Card.Footer>
                                      </Card>
                                  </CardGroup>
                              </Link>
                          </div>
                          <div className="col-3 col-md-3 px-2 mb-3 text-center">
                              <Link to='/product-detail' className='text-decoration-none'>
                                  <CardGroup>
                                      <Card className='fixed-card shadow'>
                                          <Card.Img variant="top" src="image/coffeee.png" className='img-fluid' style={{height:'170px'}} />
                                          <Card.Body>
                                          <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Cappucino </Card.Title>
                                          <div className='d-flex justify-content-center flex-column'> 

                                                      <h6 className='text-decoration-line-through text-global-color'>Rp.30.000</h6>  
                                                      <h5 className='text-danger bold' style={{}}>Rp.25.000</h5>  
                                          </div>
                                          </Card.Body>
                                          <Card.Footer>
                                          <Link to='/cart'>
                                              <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Masukkan keranjang
                                              < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                              </button>
                                          </Link>
                                          </Card.Footer>
                                      </Card>
                                  </CardGroup>
                              </Link>
                          </div>
                          <div className="col-3 col-md-3 px-2 mb-3 text-center">
                              <Link to='/product-detail' className='text-decoration-none'>
                                  <CardGroup>
                                      <Card className='fixed-card shadow'>
                                          <Card.Img variant="top" src="image/dessert.png" className='img-fluid' style={{height:'170px'}} />
                                          <Card.Body>
                                          <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >Tiramisu </Card.Title>
                                          <div className='d-flex justify-content-center flex-column'> 

                                                      <h6 className='text-decoration-line-through text-global-color'>Rp.30.000</h6>  
                                                      <h5 className='text-danger bold' style={{}}>Rp.25.000</h5>  
                                          </div>
                                          </Card.Body>
                                          <Card.Footer>
                                          <Link to='/cart'>
                                              <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Masukkan keranjang
                                              < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                              </button>
                                          </Link>
                                          </Card.Footer>
                                      </Card>
                                  </CardGroup>
                              </Link>
                          </div>
                          <div className="col-3 col-md-3 px-2 mb-3 text-center">
                              <Link to='/product-detail' className='text-decoration-none'>
                                  <CardGroup>
                                      <Card className='fixed-card shadow'>
                                          <Card.Img variant="top" src="image/kentang.png" className='img-fluid' style={{height:'170px'}} />
                                          <Card.Body>
                                          <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >French Frise </Card.Title>
                                          <div className='d-flex justify-content-center flex-column'> 

                                                      <h6 className=' text-global-color'>Rp.30.000</h6>  
                                                      {/* <h5 className='text-danger bold' style={{}}>Rp.25.000</h5>   */}
                                          </div>
                                          </Card.Body>
                                          <Card.Footer>
                                          <Link to='/cart'>
                                              <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Masukkan keranjang
                                              < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                              </button>
                                          </Link>
                                          </Card.Footer>
                                      </Card>
                                  </CardGroup>
                              </Link>
                          </div>
                          <div className="col-3 col-md-3 px-2 mb-3 text-center">
                              <Link to='/product-detail' className='text-decoration-none'>
                                  <CardGroup>
                                      <Card className='fixed-card shadow'>
                                          <Card.Img variant="top" src="image/coffeemaker.png" className='img-fluid' style={{height:'170px'}} />
                                          <Card.Body>
                                          <Card.Title className='multi-line-ellipsis mb-3 text-global-color' >V60 Filter </Card.Title>
                                          <div className='d-flex justify-content-center flex-column'> 

                                                      <h6 className='text-decoration-line-through text-global-color'>Rp.30.000</h6>  
                                                      <h5 className='text-danger bold' style={{}}>Rp.25.000</h5>  
                                          </div>
                                          </Card.Body>
                                          <Card.Footer>
                                          <Link to='/cart'>
                                              <button className='product-button-cart w-100 text-light bold p-1 rounded border shadow'>Masukkan keranjang
                                              < FontAwesomeIcon icon={faCartPlus} className='ps-2'/>
                                              </button>
                                          </Link>
                                          </Card.Footer>
                                      </Card>
                                  </CardGroup>
                              </Link>
                          </div>    
                      </div>
                    </Zoom>
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
        </div>
    </section>

    



    <section className="footer p-2">
        <Footer/>
    </section>

    </>

  )
}

