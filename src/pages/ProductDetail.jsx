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
import { useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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

//   const [productRating, setProductRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const [rating, setRating] = useState(5);

  const handleClick = (star) => {
    setRating(star);
  };

  useEffect(() => {
    // Set the rating to the initial value
    setRating(0);
  }, []);



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
                      <div onClick={() => changeImage('image/redvelvet.png')}><img src="image/redvelvet.png" alt="" className='img-fluid border rounded img-product-detail-sub' /></div>
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
          <div className="col-md-12 p-3 rounded"  style={{backgroundColor:'#EDEDE9'}}>
            <h5>Brands</h5>
            <div className='brand-title d-flex mt-4 align-items-center'> 
              <img className='me-2 rounded bg-dark p-1' src="image/katarasaBrand.png" alt=""  style={{width:'80px', height:'40px'}} />
              <h6 className='ms-3'>Kata&Rasa Coffee</h6>
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



        <div className="container p-4 rounded pe-5 ps-5 " >
        
            <h3>Ulasan</h3>
            <div className="col-md-12 rounded p-3 mb-4" style={{backgroundColor:'#EDEDE9'}}>
                <div className='d-flex  align-items-center justify-content-between'>
                    <div className="d-flex mt-2">
                        <FontAwesomeIcon icon={faStar} className='mt-1 me-2' style={{fontSize:'20px', color:'gold'}}/> 
                        <div className="d-flex align-items-center">
                            <p style={{fontSize:'20px', fontWeight:'bold'}}>4.9</p>  
                            <p style={{fontSize:'18px'}}> /5 </p> 
                            <p className='ms-2' style={{fontSize:'14px', color:'grey'}}> ( 6 ulasan) </p> 
                        
                        </div>
                    </div>

                    <div className='d-flex justify-content-around'>
                        <div className='border btn btn-outline-secondary ms-3' style={{lineHeight:'0.3'}}>
                                <div className="d-flex pt-1 ps-1 pe-1">
                                
                                    <FontAwesomeIcon icon={faStar} className='me-2' style={{fontSize:'16px', color:'gold'}}/> 
                                    <p className='mt-2' style={{fontSize:'14px', fontWeight:'bold'}}>5</p>  
                                </div>
                                <p style={{fontSize:'12px'}}> 1 ulasan </p>
                        </div>
                        <div className='border btn btn-outline-secondary ms-3' style={{lineHeight:'0.3'}}>
                            <div className="d-flex pt-1 ps-1 pe-1">
                              
                                <FontAwesomeIcon icon={faStar} className='me-2' style={{fontSize:'16px', color:'gold'}}/> 
                                <p className='mt-2' style={{fontSize:'14px', fontWeight:'bold'}}>4</p>  
                            </div>
                            <p style={{fontSize:'12px'}}> 5 ulasan </p>
                        </div>
                        <div className='border btn btn-outline-secondary ms-3' style={{lineHeight:'0.3'}}>
                            <div className="d-flex pt-1 ps-1 pe-1">
                              
                                <FontAwesomeIcon icon={faStar} className='me-2' style={{fontSize:'16px', color:'gold'}}/> 
                                <p className='mt-2' style={{fontSize:'14px', fontWeight:'bold'}}>3</p>  
                            </div>
                            <p style={{fontSize:'12px'}}> 0 ulasan </p>
                        </div>
                        <div className='border btn btn-outline-secondary ms-3' style={{lineHeight:'0.3'}}>
                            <div className="d-flex pt-1 ps-1 pe-1">
                              
                                <FontAwesomeIcon icon={faStar} className='me-2' style={{fontSize:'16px', color:'gold'}}/> 
                                <p className='mt-2' style={{fontSize:'14px', fontWeight:'bold'}}>2</p>  
                            </div>
                            <p style={{fontSize:'12px'}}> 0 ulasan </p>
                        </div>
                        
                        <div className='border btn btn-outline-secondary ms-3' style={{lineHeight:'0.3'}}>
                            <div className="d-flex pt-1 ps-1 pe-1">
                              
                                <FontAwesomeIcon icon={faStar} className='me-2' style={{fontSize:'16px', color:'gold'}}/> 
                                <p className='mt-2' style={{fontSize:'14px', fontWeight:'bold'}}>1</p>  
                            </div>
                            <p style={{fontSize:'12px'}}> 0 ulasan </p>
                        </div>
                        
                    </div>

                </div>

                
            </div> 
            <div className='review-user ms-2' style={{lineHeight:'0.4'}} >
                <p style={{fontSize:'14px', fontWeight:'bold'}}>Costumer</p>
                <div className="star-rating">
                    {Array(5).fill().map((_, index) => (
                        
                        <FontAwesomeIcon icon={faStar}
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        
                        style={rating >= index + 1 ? { color: "gold" } : { color: "gray" }}
                        />
                    ))}
                </div>
                <p className='mt-2' style={{fontSize:'14px', color:'grey'}}>04/12/2023</p>
                
                <div className='argument mt-2'>
                    {/* //nama produk */}
                    <p style={{fontSize:'14px', fontWeight:'bold'}}>Cappuchino</p>
                    <p style={{fontSize:'14px',}}>Rasa Sangat Nikmat, cocok diminum oleh segala usia</p>
                </div>

                <div className='mt-5 ms-5'>
                    {/* //nama produk */}
                    <p style={{fontSize:'14px', fontWeight:'bold', color:'grey'}}>Oleh Kata&Rasa</p>
                    <p style={{fontSize:'14px',}}>Terima kasih atas ulasan anda, jika ingin chill menikmati cappuchino, dengan lebih maka kata&rasa solusinya</p>
                </div>
            </div>  
            
            {/* <div className="container p-4 rounded pe-5 ps-5">
            </div> */}

            
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
    <section className='mt-5'>
        <div class="container pe-5 ps-5">
        <div class="row">
            <div class="col-md-12 ">
                <h3>Product Terkait</h3>
            <div class="custom-card text-center text-global-color">
                <Zoom clear>

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

    



    <section className="footer p-2">
        <Footer/>
    </section>

    </>

  )
}

