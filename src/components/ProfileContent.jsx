import React, { useState } from "react";
import reactReveal from "react-reveal";
import Fade  from 'react-reveal/Fade';
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap';
import EditProfileContent from "../components/EditProfileContent";
import EditPassword from "../components/EditPassword";


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
          birthDate: '28/11/2000',
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

            <div className="content text-global-color p-3 d-flex">

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

            {activeTab === 'akun' &&  <EditProfileContent/>}   
            {activeTab === 'password' &&  <EditPassword/>}   
        </>

        
    )
}