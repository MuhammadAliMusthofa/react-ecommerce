import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from "react-router-dom";
import { Zoom } from 'react-reveal'


export default function Footer() {
  return (
    <>
        <section>
            <div className="container">

                <div className='col-md-12 mt-3'>
                        <div className='d-flex justify-content-between text-light'>
                            <div >
                                <h6>Kata & Rasa</h6> 
                                <Link to='https://katarasa.id/#/about' className="text-decoration-none text-white  fs-13"> <br/>Tentang Kami</Link>
                                <Link to='https://katarasa.id/#/syaratdanketentuan' className="text-decoration-none text-white fs-13"> <br/>Syarat dan Ketentuan</Link>
                                <Link to='https://katarasa.id/#/kontakkami' className="text-decoration-none text-white fs-13"> <br/>Kontak Kami</Link>
                            </div>
                            <div>
                                <h6>Kategori</h6>
                                <br></br><Link to='https://katarasa.id/#/Korporasi' className="text-decoration-none text-white fs-13">Korporasi</Link> 
                                <br></br><Link to='https://katarasa.id/#/Bantuan' className="text-decoration-none text-white fs-13">Bantuan</Link> 
                            </div>
                            <div>
                                <h6>Social Media</h6>

                                <div className=' rounded d-flex justify-content-end' >
                                    <Link to='https://www.instagram.com/kopi.katarasa/' className="ms-1 bg-light rounded text-decoration-none text-white "><img  src="image/logo-ig.png" alt="no -img" style={{width: 35, height:35}} className='img-fluid w-100'  /></Link>
                                    <Link to='https://www.facebook.com/people/Kata-Rasa-Coffee-Shop/100064984783621/' className="ms-1 bg-light rounded text-decoration-none text-white border-light "><img  src="image/logo-fb.png" alt="no -img" style={{width: 35, height:35}} className='img-fluid border-light'  /></Link>
                                    <Link to='https://www.tiktok.com/@kopi_katarasa?_t=8aF8Eh5SkJW&_r=1' className="ms-1 bg-light rounded text-decoration-none text-white border-white"><img  src="image/logo-tiktok.png" alt="no -img" style={{width: 35, height:35}} className='rounded'  /></Link>
                                </div>
                            </div>

                            <div>
                                <h6>Available on</h6>
                                <div className='bg-light rounded ms-2' style={{width: 80, height:50}}>
                                    <img src="image/gofood.png" alt="no -img" style={{width:'100%'}}  />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-light mb-3">
                            <h6>Partners</h6>
                            <img src="https://katarasa.id/img/Perusahaan.c6c76c56.png" className='img-fluid' alt="" style={{height:'60px'}} />
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}
