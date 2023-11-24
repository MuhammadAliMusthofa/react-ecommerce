import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'



export default function Landing2() {
    return (
        <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="image/coffee.jpg"/>
          <Card.Body id="div-card-landing2">
            <div  className='bold text-dark text-center'>About us</div>
           
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="image/coffee.jpg" />
          <Card.Body id="div-card-landing2">
            
            <div className='bold text-dark text-center'>Menu</div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="image/coffee.jpg" />
          <Card.Body id="div-card-landing2">
           
            <div  className='bold text-dark text-center'>Our barista Recomendation</div>
          </Card.Body>
        </Card>
        
        </div>
      );
}


