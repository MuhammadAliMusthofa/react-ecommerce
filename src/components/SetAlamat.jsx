// src/components/Address.js
import React, { useState } from 'react';
import Fade  from 'react-reveal/Fade';
import AddressForm from '../components/FormEditAlamat';

const Address = () => {
  const [address, setAddress] = useState({
    street: '123 Main St',
    city: 'City',
    state: 'State',
    zip: '12345',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveAddress = (newAddress) => {
    setAddress(newAddress);
    setIsEditing(false);
  };

  const handleSetDefaultClick = () => {
    // Logika untuk menetapkan alamat sebagai alamat default
    console.log('Alamat telah ditetapkan sebagai default:', address);
  };

  return (
    <>
    <Fade top>

      <div className="p-4 rounded-top " style={{backgroundColor:'#432818', color:'#ffff'}}>
                <h3 className='my-auto'>Alamat Kirim </h3>
        </div>
        <div className='p-3'>
          
          {isEditing ? (
            <AddressForm onCancel={() => setIsEditing(false)} onSave={handleSaveAddress} initialData={address} />
          ) : (
            <div>
              <p>Alamat: {address.street}, {address.city}, {address.state} {address.zip}</p>
              <button className='btn-global1' onClick={handleEditClick}>Edit Alamat</button>
              <button className='btn-global2 ms-3' onClick={handleSetDefaultClick}>Tetapkan Sebagai Default</button>
            </div>
          )}
        </div>
    </Fade>

    <Fade bottom>

    <div className='mt-5'>
    <div className="p-4 rounded-top " style={{backgroundColor:'#432818', color:'#ffff'}}>
            <h3 className='my-auto'>Alamat Kirim 2</h3>
    </div>
    <div className='p-3'>
      
      {isEditing ? (
        <AddressForm onCancel={() => setIsEditing(false)} onSave={handleSaveAddress} initialData={address} />
      ) : (
        <div>
          <p>Alamat: Jl. Pahlawan No. 123
            Kelurahan Mawar, Kecamatan Indah
            Kota Sejahtera
            Provinsi Bahagia
            Kode Pos: 12345
            Negara Ceria</p>
          <button className='btn-global1' onClick={handleEditClick}>Edit Alamat</button>
          <button className='btn-global2 ms-3' onClick={handleSetDefaultClick}>Tetapkan Sebagai Default</button>
        </div>
      )}
    </div>
    </div>
    </Fade>
   </>
  );
};

export default Address;
