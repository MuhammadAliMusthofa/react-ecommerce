import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function CarauselCompo() {
  return (
    <Carousel>
    <Carousel.Item>
      {/* <ExampleCarouselImage text="First slide" /> */}
      <div className='card' style={{maxHeight : 350}}>
      <img
        // MASDIS
        src="https://katarasa.id/img/banner1.bd986689.png"
        alt="First slide"
        className='img-fluid rounded'
        style={{width:'100%', height:'100%'}}
      />
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='card' style={{maxHeight : 350}}>
    <img
        
        src="image/katarasa-kopi.png"
        alt="First slide"
        className='img-fluid rounded'
      />
      
    </div>
      {/* <ExampleCarouselImage text="Second slide" /> */}
      
    </Carousel.Item>
  
  </Carousel>
  )
}

export default CarauselCompo

