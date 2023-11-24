import React from 'react';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Zoom  from 'react-reveal/Zoom';
import Fade  from 'react-reveal/Fade';

export default function noncoffee() {
  return (

    <>
    <div>
    <Fade right>

        <img src="https://katarasa.id/img/NonCoffeeBanner.9f23f351.png" alt="poster promo" className="img-fluid w-100 rounded mb-5" style={{height:'200px'}} />
    </Fade>
    </div>
    
    <h3>Non Coffee</h3>

    <Zoom clear>

        <div className="product row p-lr-3">
                            <div className="col-3 col-md-3 px-2 mb-3 text-center">
                                <Link to='/product-detail' className='text-decoration-none'>
                                    <CardGroup>
                                        <Card className='fixed-card shadow'>
                                            <Card.Img variant="top" src="image/taro.png" className='img-fluid' style={{height:'150px'}} />
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
                            
                        </div>
    </Zoom>
    </>
    
  )
}
