// src/components/Address.js
import React, { useState } from 'react';
import Fade  from 'react-reveal/Fade';
import AddressForm from '../components/FormEditAlamat';
import { Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    receiverName: '',
    phoneNumber: '',
    destination: 'Rumah',
    address: ''
  });
  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, newAddress]);
    setShowModalCreate(false);
    setNewAddress({
      receiverName: '',
      phoneNumber: '',
      destination: 'Rumah',
      address: ''
    });
  };
  let address='';
  const renderAddress = (address, index) => {
    return (
      <>
      

      <div className='w-100 p-3 rounded mb-3' style={{ background: '#e9ecef' }} key={index}>
        <div className='row'>
          <div className='col-md-3 me-3'>
            <div className='p-2'>
              <h6 style={{ fontSize: '12px' }}>{addresses[index].receiverName}</h6>
              <h6 style={{ fontSize: '12px' }}>{addresses[index].phoneNumber}</h6>
            </div>
          </div>
          <div className='col-md-6'>
            <p style={{ fontSize: '13px' }}>({addresses[index].destination})</p>
            <p style={{ fontSize: '13px' }}>Alamat: {addresses[index].address}</p>
          </div>
          <div className='text-end'>
                    <button className='btn-global2 ms-2 ' style={{width:'124px', fontSize:'13px', height:'35px'}} onClick={handleShow}>Edit Alamat</button>
                    <button className='btn-global1 ms-2 ' style={{width:'138px', fontSize:'13px', height:'35px'}} onClick={handleEditClick}>Set Alamat Utama</button>

           </div>
        </div>
      </div>
      </>
    );
  };
  const handleShow = () => setShowModal(true);
  const handleShow1 = () => setShowModalCreate(true);
  const handleClose = () => setShowModal(false);
  const handleClose1 = () => setShowModalCreate(false);

  const handleEdit = () => {
    // Logika untuk melakukan edit data
    // ...
    handleClose(); // Tutup modal setelah berhasil melakukan edit
  };

  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
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
        <div className=' p-4'>

        <div className='d-flex justify-content-end mb-3' >
            <button className='btn-global2 w-25 d-flex align-items-center justify-content-center' onClick={handleShow1}><FontAwesomeIcon style={{fontSize:'25px'}} icon={faSquarePlus} className='me-2'/> Tambah Alamat</button>
        </div>
        <div className=' w-100 p-3 rounded mb-3' style={{background:'#e9ecef'}}>
              {isEditing ? (
                <AddressForm onCancel={() => setIsEditing(false)} onSave={handleSaveAddress} initialData={address} />
              ) : (
                <>
                <div className='row ' >
                  <div className='col-md-3 me-3'>
                    <div className='text-center bg-secondary p-2 rounded' style={{width:'110px'}}>
                      <h6 style={{fontSize:'12px'}} className='my-auto text-light' >Alamat Utama</h6>

                    </div>
                    <div className='p-2'>
                    <h6 style={{fontSize:'12px'}}  >Ali</h6>
                    <h6 style={{fontSize:'12px'}}  >081355730605</h6>
                    
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <p style={{fontSize:'13px'}}>(Rumah)</p>
                    <p style={{fontSize:'13px'}}>Alamat: {address.street}, {address.city}, {address.state} {address.zip}
                         KOTA BANDUNG, JAWA BARAT, Indonesia</p>
                    {/* <button className='ms-3' onClick={handleSetDefaultClick}>Tetapkan Sebagai Default</button> */}
                  </div>
                </div>
                <div className='text-end'>
                  <button className='btn-global2 ms-2 ' style={{width:'124px', fontSize:'13px', height:'35px'}} onClick={handleShow}>Edit Alamat</button>

                </div>
                </>
              )}
            </div>
            
            <div className=' w-100 p-3 rounded mb-3' style={{background:'#e9ecef'}}>
                {isEditing ? (
                  <AddressForm onCancel={() => setIsEditing(false)} onSave={handleSaveAddress} initialData={address} />
                ) : (
                  <>
                  <div className='row ' >
                    <div className='col-md-3 me-3'>
                      
                      <div className='p-2'>
                      <h6 style={{fontSize:'12px'}}  >Ali</h6>
                      <h6 style={{fontSize:'12px'}}  >081355730605</h6>
                      
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <p style={{fontSize:'13px'}}>(Rumah)</p>
                      <p style={{fontSize:'13px'}}>Alamat: {address.street}, {address.city}, {address.state} {address.zip}
                          KOTA BANDUNG, JAWA BARAT, Indonesia</p>
                      {/* <button className='ms-3' onClick={handleSetDefaultClick}>Tetapkan Sebagai Default</button> */}
                    </div>
                  </div>
                  <div className='text-end'>
                    <button className='btn-global2 ms-2 ' style={{width:'124px', fontSize:'13px', height:'35px'}} onClick={handleShow}>Edit Alamat</button>
                    <button className='btn-global1 ms-2 ' style={{width:'138px', fontSize:'13px', height:'35px'}} onClick={handleEditClick}>Set Alamat Utama</button>

                  </div>
                  </>
                )}
            </div>
          
            {addresses.map((address, index) => renderAddress(address, index))}
        </div>
          
    </Fade>
        
    <div>

      {/* Modal Create Alamat */}
      <Modal show={showModalCreate} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Alamat Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddAddress}>
            <Form.Group controlId="receiverName">
              <Form.Label>Nama Penerima</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama penerima" value={newAddress.receiverName} onChange={(e) => setNewAddress({ ...newAddress, receiverName: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Nomor Handphone</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nomor handphone" value={newAddress.phoneNumber} onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="destination">
              <Form.Label>Lokasi Tujuan</Form.Label>
              <Form.Control as="select" value={newAddress.destination} onChange={(e) => setNewAddress({ ...newAddress, destination: e.target.value })}>
                <option value="Rumah">Rumah</option>
                <option value="Kantor">Kantor</option>
                <option value="Lainnya">Lainnya</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Masukkan alamat" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />
            </Form.Group>
            
            <button type="submit" className='btn-global2'>Simpan Alamat</button>
          </Form>
        </Modal.Body>
      </Modal>

       {/* Modal Edit Alamat   */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Isi dengan field-field untuk edit data */}
            <Form.Group controlId="formFieldName">
              <Form.Label>Nama Penerima</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama" />
            </Form.Group>
            <Form.Group controlId="formFieldName">
              <Form.Label>Nomor Hp</Form.Label>    
              <Form.Control type="number" placeholder="Masukkan no hp" />
            </Form.Group>
            <Form.Group controlId="formFieldName">
              <Form.Label>Lokasi tujuan</Form.Label>    
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="rumah">Rumah</option>
                <option value="kantor">Kantor</option>
                <option value="lainnya">Lainnya</option>
          </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFieldName">
              <Form.Label>Alamat</Form.Label>
              <textarea  type="text-area" className="form-control" rows="3" id="address2" placeholder="alamat"></textarea>

            </Form.Group>
            {/* Tambahkan field lainnya sesuai kebutuhan */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
     
     

    
   </>
  );
};

export default Address;
