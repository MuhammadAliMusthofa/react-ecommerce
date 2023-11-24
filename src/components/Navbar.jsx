import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Form,Button } from 'react-bootstrap';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavbarCompo() {
 
  
  const rooting = useNavigate();
  

  const pindahHalaman = (e)=>{
   if(e.target.id == 'menu'){
      rooting('/')
    }else if(e.target.id == 'about'){
      rooting('/product-detail')
    }else if(e.target.id == 'login'){
      rooting('/login')
    }else if(e.target.id == 'register'){
      rooting('/register')
    }else if(e.target.id == 'profile'){
      rooting('/profile')
    }else if(e.target.id == 'cart'){
      rooting('/cart')
    }else if(e.target.id == 'promo'){
      rooting('/promo')
    }else{
      rooting('/')
    }
    console.log(e)
  }
  return (
    <Navbar  expand="lg" className="navbar ms-auto sticky-top ps-5 pe-5">
      <Container className=''>
        <Navbar.Brand href="#home" className=''>
          <img src="https://katarasa.id/img/logokatarasa1.0a598b45.png" alt="" style={{width: '60px', height:'60x', color:'white', backgroundPosition:'center center', backroundSize:'cover' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav-ul  text-light ms-5">
            
            <Nav.Link onClick={(e)=>pindahHalaman(e)} id='menu' className="nav-li">Menu</Nav.Link>
            
            
            <Nav.Link onClick={(e)=>pindahHalaman(e)} id='promo' className="nav-li">Promo</Nav.Link>
           
            <Form className="d-flex search-form ">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="ms-4 outline-dark w-100 rounded"
                    aria-label="Search"
                    // style={{backgroundColor:'#faedcd'}}
                    />
                    <Button variant="" className='ms-2 search-btn rounded' >
                    <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Form>
                <Nav.Link className="ms-5" onClick={(e)=>pindahHalaman(e)} id='cart' >
                <FontAwesomeIcon icon={faCartPlus} id='cart' className='text-white' style={{width:'30px', height:'25px'}} bounce/>
                  
                </Nav.Link>
                <Nav.Link className="me-3 ms-3 text-white login-btn text-center" onClick={(e)=>pindahHalaman(e)} id='login' >
                  Masuk
                </Nav.Link>
                <Nav.Link className="text-white register-btn text-center" onClick={(e)=>pindahHalaman(e)} id='register' >
                  Daftar
                </Nav.Link>
            {/* <div className='me-2 mb-3'>
            </div> */}
          </Nav>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;
