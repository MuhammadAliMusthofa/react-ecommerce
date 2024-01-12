import React, { useState } from "react";
import reactReveal from "react-reveal";
import Fade  from 'react-reveal/Fade';
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap';
import BelumBayar from "../components/Transaksi-belum-byr";
import Dikemas from "../components/Transaksi-dikemas";
import Dikirim from "../components/Transaksi-dikirim";
import Semua from "../components/Transaksi-semua";
import Selesai from "../components/Transaksi-selesai";



export default function profile(){
   

       // handle header menu
        const [activeTab, setActiveTab] = useState('semua');
        const handleTabClick = (tab) => {
          setActiveTab(tab);
        };
        const getTabStyle = (tab) => {
          return {
            borderBottom: activeTab === tab ? '3px solid #432818' : 'none',
            color: activeTab === tab ? '#432818' : '#000',
          };
        };
    
       
      

    return(
        <>

            <div className="content text-global-color p-3 d-flex justify-content-around">

              <div className=" p-1 font-weight-bold me-2 text-start"
                          style={getTabStyle('semua')}
                          onClick={() => handleTabClick('semua')}>
                        <h6 className=' mt-1 ms-2 '>Semua</h6>
              </div>

              <div className=" p-1 font-weight-bold text-start"
                          style={getTabStyle('belum-byr')}
                          onClick={() => handleTabClick('belum-byr')}>
                        <h6 className=' mt-1 ms-2 '>Belum dibayar</h6>
              </div>
              <div className=" p-1 font-weight-bold text-start"
                          style={getTabStyle('dikemas')}
                          onClick={() => handleTabClick('dikemas')}>
                        <h6 className=' mt-1 ms-2 '>Sedang dikemas</h6>
              </div>
              <div className=" p-1 font-weight-bold text-start"
                          style={getTabStyle('dikirim')}
                          onClick={() => handleTabClick('dikirim')}>
                        <h6 className=' mt-1 ms-2 '>Dikirim</h6>
              </div>
              <div className=" p-1 font-weight-bold text-start"
                          style={getTabStyle('selesai')}
                          onClick={() => handleTabClick('selesai')}>
                        <h6 className=' mt-1 ms-2 '>Selesai</h6>
              </div>
            </div>

            {activeTab === 'semua' &&  <Semua/>}   
            {activeTab === 'belum-byr' &&  <BelumBayar/>}   
            {activeTab === 'dikemas' &&  <Dikemas/>}   
            {activeTab === 'dikirim' &&  <Dikirim/>}   
            {activeTab === 'selesai' &&  <Selesai/>}   
        </>

        
    )
}