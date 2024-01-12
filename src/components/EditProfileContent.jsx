import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Fade  from 'react-reveal/Fade';


function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    
    email: yup.string().required(),
    tanggal_lahir: yup.date().required(),
    telepon: yup.string().required(),
    alamat: yup.string().required(),
    bio: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });

  return (
    <>

    <Fade right>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: 'Muhammad Ali',
          email: 'Ali@mail.com',
          tanggal_lahir: '',
          telepon: '',
          alamat: '',
          file: null,
          terms: false,
          bio:'',

        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='p-3'>
          
              <Form.Group
               
                controlId="validationFormik101"
                className="position-relative mb-3"
              >
                <Form.Label style={{fontSize:'13px'}}>Nama Lengkap</Form.Label>
                <Form.Control 
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  className='w-50'
                  
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
            
              <Form.Group  controlId="validationFormiktanggallahir" className='mb-3'>
                <Form.Label style={{fontSize:'13px'}}>Tanggal Lahir</Form.Label>
                <InputGroup hasValidation className='w-50'>
                  <Form.Control
                    type="date"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    name="tanggal_lahir"
                    value={values.tanggal_lahir}
                    onChange={handleChange}
                    isInvalid={!!errors.tanggal_lahir}
                    
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.tanggal_lahir}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group  controlId="validationFormiktanggallahir">
                <Form.Label style={{fontSize:'13px'}}>Jenis Kelamin</Form.Label>
                <InputGroup hasValidation>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Laki-laki"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="perempuan"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                     
                    </div>
                  ))}

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.tanggal_lahir}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            
              <Form.Group className="position-relative mb-3">
                <Form.Label style={{fontSize:'13px'}}>Ubah Foto Profile</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="file"
                  onChange={handleChange}
                  isInvalid={!!errors.file}
                  className='w-50'
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.file}
                </Form.Control.Feedback>
              </Form.Group>

              <div className='w-50 p-3 rounded  mb-3' >
                <div className='border-bottom mb-3 mt-2'>
                  <div className='d-flex justify-content-between' style={{lineHeight:0.2}}>

                    <p style={{fonstSize:'13px'}}>Nomor Handphone</p>
                    <p style={{fonstSize:'13px'}} className='text-success'>Verifikasi</p>
                  </div>
                  <p style={{fontSize:'12px'}}>081355730605</p>
                    
                </div>

                <div className='border-bottom'>
                      <div className='d-flex justify-content-between' style={{lineHeight:0.2}}>

                        <p style={{fonstSize:'13px'}}>Email</p>
                        <p style={{fonstSize:'13px'}} className='text-success'>Ubah</p>
                      </div>
                        <p style={{fontSize:'12px'}}>ali@gmail.com</p>
                  </div>
              </div>
            
            {/* <button type="" className=' btn btn-outline-danger  me-3 px-5'>Hapus Akun</button> */}
            <button type="submit" className='btn  btn-save'>Simpan</button>
          </Form>
        )}
      </Formik>
    </Fade>
    </>
  );
}

export default FormExample;