import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "../index.css";
import NavbarCompo from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { Zoom } from 'react-reveal';





export default function register() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const rooting = useNavigate();
    const pindahHalaman = (e)=>{
        if (e.target.id == 'login' ){
        rooting('/login')
        }else{
        rooting('/')
        }
        console.log(e)
    }
  return (
    <>
    <NavbarCompo className='mb-5 '/>

   <section className='container2 pb-3'>
        <div className="container ">
            <div className="row">

               <Zoom clear>

                <div className="col-md-4 mt-3 mx-auto border p-3 rounded-3 shadow login-page ">
                <div className=" text-center ">
                    <img className='' src="image/coffee-bean.svg" alt="" style={{width:'110px'}}  />

                </div>
                <h3 className=" text-center">Register</h3>
                    

                    <div className='mb-3'>

                        <label htmlFor="">Nama Lengkap</label>
                        
                        <Form.Control
                            placeholder="Fill with fullname"
                            aria-label="fullname"
                            name='fullname'
                            type='text'
                            className='w-100'
                            
                        />
                    </div>
                    <div className='mb-3'>

                        <label htmlFor="">Nomor Handphone</label>
                        
                        <Form.Control
                            placeholder="Fill with phone"
                            aria-label="phone"
                            name='phone'
                            type='number'
                            className='w-100'
                            
                        />
                    </div>
                    <div className='mb-3'>

                        <label htmlFor="">Email</label>
                        
                        <Form.Control
                            placeholder="Fill with email"
                            aria-label="Username"
                            name='email'
                            type='email'
                            className='w-100'
                            
                        />
                    </div>

                    <div className='mb-3'>

                        <label htmlFor="">Password</label> 
                        <Form.Group className='d-flex'>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            
                            />
                            
                            <Button className="btn btn-secondary ms-1" onClick={togglePasswordVisibility}>
                                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </Button>
                            
                            
                        </Form.Group>
                    </div>

                    <Button className="mx-auto btn-masuk">Register</Button>{' '}
                    
                        <div className='d-flex mt-3'>

                            <p>sudah punya akun?</p>
                            <Link className="ms-2 text-decoration-none" onClick={(e)=>pindahHalaman(e)} id='login' > Masuk</Link>
                        </div>
                </div>
                   
                    
                    
               </Zoom>
                
            </div>

        </div>
   </section>

   

    </>
  );
}
