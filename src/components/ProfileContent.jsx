import React, { useState } from "react";
import reactReveal from "react-reveal";
import Fade  from 'react-reveal/Fade';
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap';

export default function profile(){
   

       // handle header menu
        const [activeTab, setActiveTab] = useState('akun');
        const handleTabClick = (tab) => {
          setActiveTab(tab);
        };
        const getTabStyle = (tab) => {
          return {
            borderBottom: activeTab === tab ? '3px solid #432818' : 'none',
            color: activeTab === tab ? '#432818' : '#000',
          };
        };
    
        //form
        const [formData, setFormData] = useState({
          name: 'ali',
          birthDate: '28 september',
          gender: 'lAKI', // Menyimpan jenis kelamin yang dipilih
          phoneNumber: '2345',
          email: 'use@mail.com',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
      
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleGenderChange = (e) => {
          setFormData({
            ...formData,
            gender: e.target.value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Lakukan sesuatu dengan data yang di-submit, misalnya mengirimkan ke backend
          console.log('Data yang di-submit: ', formData);
        };
      
        const handleDeleteAccount = () => {
          // Lakukan sesuatu untuk menghapus akun
          console.log('Akun dihapus');
        };

    return(
        <>

            <div className="content  mb-3 text-global-color p-3 d-flex">

              <div className=" p-1 font-weight-bold me-2 text-start"
                          style={getTabStyle('akun')}
                          onClick={() => handleTabClick('akun')}>
                        <h6 className=' mt-1 ms-2 '>Akun </h6>
              </div>

              <div className=" p-1 font-weight-bold text-start"
                          style={getTabStyle('password')}
                          onClick={() => handleTabClick('password')}>
                        <h6 className=' mt-1 ms-2 '>Ubah Password</h6>
              </div>
            </div>

            {activeTab === 'akun' &&  
                <Fade right>
                      <div className="user-profile">
                        
                      <Form onSubmit={handleSubmit}>
                          <Form.Group as={Row} className="mb-3" controlId="formName">
                            <Form.Label column sm="2">
                              Nama
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                type="text"
                                placeholder="Masukkan nama"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formBirthDate">
                            <Form.Label>
                              Tanggal Lahir
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} className="mb-3" controlId="formGender">
                            <Form.Label column sm="2">
                              Jenis Kelamin
                            </Form.Label>
                            <Col sm="10">
                              <Form.Check
                                type="radio"
                                label="Laki-laki"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleGenderChange}
                              />
                              <Form.Check
                                type="radio"
                                label="Perempuan"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleGenderChange}
                              />
                            </Col>
                          </Form.Group>

                        

                          <button type="button" class="btn btn-outline-lime me-1 mb-1">Lime</button>
                          <Button variant="danger" onClick={handleDeleteAccount}>
                            Hapus Akun
                          </Button>
                      </Form>
                   

                   
                      </div>
                </Fade>
            }
        </>

        
    )
}