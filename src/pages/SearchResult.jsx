import React from 'react';
import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
import NavbarCompo from "../components/Navbar";
import CoffeeContent from "../components/CoffeeCompo";
import CoffeeMakerContent from "../components/CoffeeMaker";
import NonCoffeeContent from "../components/NonCoffee";
import ToastContent from "../components/Toast";
import FilterContent from "../components/Filter";
import DessertContent from "../components/Dessert";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
 import Pagination from 'react-bootstrap/Pagination';
// import NavbarCompo from "../components/Navbar";






export default function HomePageToko() {

  const [activeCategory, setActiveCategory] = useState('coffee');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getCategoryStyle = (category) => {
    return {
      background: activeCategory === category ? 'linear-gradient(to right, #ddb892, #d2ac87, #c6a07d, #bb9572, #b08968)' : 'none',
      color: activeCategory === category ? '#fff' : '#000',
    };
  };

  return (
    <>
      <NavbarCompo  className='mb-5'/>
      
    <section className='mt-4 mb-4 p-4'>
        <div className=" container pe-5 ps-5">
            <div className='row'>
                <div class="col-md-3 mb-3 mb-md-0  ">     
                  <Card className='' style={{  backgroundColor:'#432818'}}>
                      <Card.Title className='text-center p-2 font-weight-bold' style={{color:'#ffff'}}>Category</Card.Title>
                          <Card.Body  className="d-flex flex-column bg-light rounded-bottom">
                            <div className="kategori mb-2 rounded p-1 font-weight-bold shadow "
                              style={getCategoryStyle('coffee')}
                              onClick={() => handleCategoryClick('coffee')}>
                              <h6 className=' mt-1 ms-2'>Coffee</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1 font-weight-bold shadow  "
                                style={getCategoryStyle('Non coffee')}
                                onClick={() => handleCategoryClick('Non coffee')}>
                              <h6 className=' mt-1 ms-2'>Non Coffee</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('toast')}
                               onClick={() => handleCategoryClick('toast')}>
                              <h6 className=' mt-1 ms-2'>Toast</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('dessert')}
                               onClick={() => handleCategoryClick('dessert')}>
                              <h6 className=' mt-1 ms-2'>Dessert</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('coffeemaker')}
                               onClick={() => handleCategoryClick('coffeemaker')}>
                              <h6 className=' mt-1 ms-2'>Coffe Maker</h6>
                            </div>
                            <div className="kategori mb-2 rounded p-1  font-weight-bold shadow"
                               style={getCategoryStyle('filter')}
                               onClick={() => handleCategoryClick('filter')}>
                              <h6 className=' mt-1 ms-2'>Filter</h6>
                            </div>
                            
                          
                          </Card.Body>
                    </Card>
                </div>
        
       
                <div className="col-md-9 ">
                 
                    {activeCategory === 'coffee' && <CoffeeContent />}
                    {activeCategory === 'Non coffee' && <NonCoffeeContent />}
                    {activeCategory === 'dessert' && <DessertContent />}
                    {activeCategory === 'filter' && <FilterContent />}
                    {activeCategory === 'toast' && <ToastContent />}
                    {activeCategory === 'coffeemaker' && <CoffeeMakerContent />}
                
                    <div className='Paginasi d-flex justify-content-center mt-5 fixed' >
                            <Pagination className='paginasi'>
                            
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Next />
                           
                            </Pagination>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
      <div className="footer p-2">
          <Footer/>
      </div>
      
    </>
  )
}

