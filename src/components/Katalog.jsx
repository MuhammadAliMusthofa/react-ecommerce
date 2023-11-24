import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Katalog() {
  return (
    <>
    <div className="d-flex justify-content-around">
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image/coffee.jpg" />
      <Card.Body>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image/coffee.jpg" />
      <Card.Body>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image/coffee.jpg" />
      <Card.Body>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    </>
  )
}
