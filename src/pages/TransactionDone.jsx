import React from 'react';
import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import Footer from "../components/Footer";
// import { Form, Button } from 'react-bootstrap';
import {  Row, Col } from 'react-bootstrap';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';



export default function payment() {
    // Data transaksi (menggantinya dengan data sebenarnya dari backend atau state aplikasi)
  const transactionData = {
    orderId: '123456789',
    shippingAddress: 'Jl. Contoh No. 123, Kota Contoh',
    orderedProducts: [
      { name: 'Cappucino', quantity: 1, price: 25000 },
      { name: 'V60 Coffee', quantity: 1, price: 25000 },
      { name: 'Red Velvet', quantity: 1, price: 25000 },
      // Tambahkan produk lainnya jika ada
    ],
    totalAmount: 75000,
    paymentStatus: 'Success', // Status pembayaran dapat menjadi 'Success', 'Pending', atau 'Failed'
  };
    
  return (
    <>
    <NavbarCompo/>

    <section className='mt-5 mb-5'>
        <div className="container pe-5 ps-5">
            <div className="col-md-12 ">
            <Fade top>

                <div className="checkout shadow rounded text-global-color">
                    <div className="checkout-header  " style={{backgroundColor:'#432818', color:'#ffff'}}>
                        <div className=" text-center">
                            <h5>Pembayaran</h5>
                        </div>
                    </div>
                    <div className="checkout-body ">
                      <div className='col-md-8 mx-auto'>

                      <Container className='mt-5 p-3'>
                        <h2>Transaksi Berhasil</h2>
                        <Card className='mb-5 old-color'>
                            <Card.Body>
                            <Row>
                                <Col>
                                <h4>Order ID: {transactionData.orderId}</h4>
                                <p>Alamat Pengiriman: {transactionData.shippingAddress}</p>
                                </Col>
                                <Col>
                                <h4 className='text-success'>Status Pembayaran: {transactionData.paymentStatus}</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <h5>Produk yang Dipesan:</h5>
                                <ul>
                                    {transactionData.orderedProducts.map((product, index) => (
                                    <li key={index}>
                                        {product.name} - Jumlah: {product.quantity} - Harga: RP.{product.price * product.quantity}
                                    </li>
                                    ))}
                                </ul>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <h4>Total Bayar: Rp.{transactionData.totalAmount}</h4>
                                </Col>
                            </Row>

                            <div className='text-center mt-3'>
                                <h5>Terima Kasih Pesanan Anda Sedang Diproses</h5>
                            </div>
                            </Card.Body>
                        </Card>
                    </Container>
                    
                    <Link to='/product' className='text-decoration-none'>
                        <div className='d-flex justify-content-end mt-3 pb-3 pe-3'>
                                <button className='btn-global2'>Kembali Ke Menu
                                
                                </button> 
                        </div>
                        </Link>
                      </div>
                        
                    </div>
                    
                </div>
            </Fade>
            </div>
        </div>
    </section>

    <div className="footer p-2">
          <Footer/>
    </div>
    </>

  )
}






    