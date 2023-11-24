import React from 'react'
import "../index.css";
import NavbarCompo from "../components/Navbar";
import CarauselCompo from "../components/Carausel";
import Landing2 from "../components/Landing2";
import Landing3 from "../components/Landing3";
import Landing4 from "../components/Landing4";
import Footer from "../components/Footer";




export default function Home() {
  return (
   <>
     {/* Tampilan Navbar*/}
     <NavbarCompo />

    {/* Tampilan Carousel */}
    <CarauselCompo/>
    

    <div className="mt-5">

    {/* Tampilan Tulisan Kata Rasa  */}
    <div className="d-flex justify-content-center mb-3">
        <img className="" src="" alt=" KATA RASA" style={{width:100, height: 100}} />
    </div>

    {/* Tampilan Landing Menu */}
    <Landing2/>

    {/* Tampilan */}
    <h3 className="mt-3 text-center bold mb-3">Take us to Bring Your Joy!</h3>

    {/* Tampilan Our Coffee */}
    <div className="bg-dark p-5">
        <Landing3/>
    </div>

    {/* Tampilan Our Product */}
    <div className="bg-light p-5">
        <Landing4/>
    </div>


    {/* Tampilan Footer */}
    <div className="bg-dark p-2">
        <Footer/>
    </div>

    </div>
   </>
       
    
  )
}
