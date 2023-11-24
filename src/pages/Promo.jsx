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
import Zoom  from 'react-reveal/Zoom';
import Fade  from 'react-reveal/Fade';




export default function SearchResult() {
  return (
    <>
    <NavbarCompo/>
    <section className=''>
        <Zoom clear>

            <img src="https://katarasa.id/img/bannerpromo.e510658d.png" alt="no-img" className='w-100 no-rounded' style={{height:'350px'}}  />  
        </Zoom>
    </section>


    {/* promo */}
    <section className='mt-3 p-4' >
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row text-center">
                        <h1 className='color-old mb-5'>Kata&Rasa Promo !!!</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            
                            <Fade right>

                                <div className="col-md-5 shadow rounded me-3" >
                                    <img src="https://katarasa.id/img/bg1.21a5567d.png" className='img-fluid rounded' style={{height:'200px'}} alt="" />
                                    <h6 className='mt-3 mb-3'>Upss Maaf Promo Belum Tersedia..</h6>
                                </div>
                            </Fade>

                            <Fade left>

                                <div className="col-md-5 shadow rounded " >
                                    <img src="https://katarasa.id/img/bg1.21a5567d.png" className='img-fluid rounded' style={{height:'200px'}} alt="" />
                                    <h6 className='mt-3 mb-3'>Upss Maaf Promo Belum Tersedia..</h6>
                                </div>
                            </Fade>
                        </div>
                        

                    </div>
                   
                </div>
            </div>
        </div>
    </section>


   
    <div className="p-2 footer mt-5">
        <Footer/>
    </div>
    </>

  )
}


