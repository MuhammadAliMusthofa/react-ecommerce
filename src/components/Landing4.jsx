import React from 'react';
import Button from 'react-bootstrap/Button';



export default function Landing4() {
  return (
    <div className='d-flex justify-content-around align-items-center'>


        <div>
             <img src="image/coffee2.jpg" alt="no img" style={{width: 350, height :250, borderRadius:15}} />

        </div>

        <div className='text-center'>
            <h1>Products</h1>
            <p>Barista Tools & Special Tumbler for you!</p>
            <a href="#" className='rounded btn btn-info'  >view more</a>
        </div>

        
    </div>
  )
}
