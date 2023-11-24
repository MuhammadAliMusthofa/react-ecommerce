import React from "react";
import NavbarCompo from "../components/Navbar";
import Footer from "../components/Footer";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function EditProfile() {
 
  return (
    <>
        <NavbarCompo />
        
        <div className="container d-flex justify-content-center">
          <div className="col mb-3 ">
            <div className="col-md-6">
              <div className="col card shadow">
                <div className="d-flex justify-content-center alignt-items-center border-bottom">
                  <img
                    src="image/profile.png"
                    alt=""
                    style={{ width: "100px" }}
                    className="rounded-circle "
                  />
                </div>
                <div className="text-center">
                  <h3>Muhammad Ali</h3>
                  <p>The Intern Boy</p>
                </div>

                <div className='p-3'>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Fullname</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control type="number" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Favorite</Form.Label>
                      <Form.Control type="text" placeholder="name@example.com" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Alamat</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                </Form>
              
              <h4 className="border-bottom">Favorite :</h4>

              <div>
                <button className="btn btn-success position-bottom">Simpan</button>
              </div>
                </div>
              </div>
            </div>
            
          </div>
        
        </div>
        <div className="text-white p-2">
          <Footer/>
        </div>
    </>
  );
}
