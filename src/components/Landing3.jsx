import React from 'react';
import Button from 'react-bootstrap/Button';



export default function Landing3() {
  return (
    <div className='d-flex justify-content-around text-light align-items-center'>

        <div className='text-center'>
            <h1>Our Coffee</h1>
            <p>Try the sensation of quality Gayo Coffee at Low Prices!</p>
            <a href="#" className='rounded btn btn-info'  >view more</a>
        </div>

        <div>
         <img src="image/coffee2.jpg" alt="no img" style={{width: 350, height :250, borderRadius:15}} />

        </div>
    </div>
  )
}
